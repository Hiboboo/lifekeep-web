// src/app/api/leads/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, answer } = body;

    // 1. 解析 User-Agent 判断设备类型
    const userAgent = request.headers.get("user-agent")?.toLowerCase() || "";
    const isMobile = /mobile|android|iphone|ipad|phone/i.test(userAgent);
    const device = isMobile ? "mobile" : "desktop";

    // 2. 利用 Vercel 提供的地理位置 Header 获取国家代码 (例如: US, CN, JP)
    // 本地开发环境下可能为空，给一个默认值
    const country = request.headers.get("x-vercel-ip-country") || "Unknown";

    // 构建基础数据载荷
    const baseData = { device, country };

    // 场景一：用户在顶部 Hero 区域仅提交了邮箱
    if (email && !answer) {
      const { data, error } = await supabase
        .from("leads")
        .upsert({ email, ...baseData }, { onConflict: "email" })
        .select()
        .single();

      if (error) throw error;
      return NextResponse.json({ success: true, lead: data });
    }

    // 场景二：用户在底部 Pricing 区域提交了付费意愿 (answer)
    if (answer) {
      if (email) {
        // 如果关联了邮箱，更新该用户的 answer 字段，并顺便更新最新的设备和地理位置
        const { data, error } = await supabase
          .from("leads")
          .update({ answer, ...baseData })
          .eq("email", email)
          .select()
          .single();

        if (error) throw error;
        return NextResponse.json({ success: true, lead: data });
      } else {
        // 纯匿名投票
        const { data, error } = await supabase
          .from("leads")
          .insert({ answer, ...baseData })
          .select()
          .single();

        if (error) throw error;
        return NextResponse.json({ success: true, lead: data });
      }
    }

    return NextResponse.json({ error: "参数不完整" }, { status: 400 });
  } catch (error: any) {
    console.error("Supabase 操作失败:", error.message);
    return NextResponse.json({ error: "服务器内部错误" }, { status: 500 });
  }
}