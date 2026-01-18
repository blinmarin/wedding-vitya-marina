import { NextRequest, NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwnHt9u04ILFH-Q_BS_6zaSs2vvSJkQGJGdxaR_kSyOkAzDMYxP8BwMvuY0P5VVbGfX/exec";

export const maxDuration = 30;

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const params = new URLSearchParams({
      name: data.name || "",
      attending: data.attending || "",
      alcohol: data.alcohol || "",
    });

    const googleUrl = `${GOOGLE_SCRIPT_URL}?${params.toString()}`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 25000);

    try {
      const response = await fetch(googleUrl, {
        method: "GET",
        redirect: "follow",
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const responseText = await response.text();

      if (!responseText) {
        return NextResponse.json({ success: true });
      }

      try {
        const result = JSON.parse(responseText);
        return NextResponse.json({ success: result.success ?? true });
      } catch {
        return NextResponse.json({ success: response.ok });
      }
    } catch (fetchError) {
      clearTimeout(timeoutId);
      if (fetchError instanceof Error && fetchError.name === "AbortError") {
        return NextResponse.json(
          { success: false, error: "Request timeout" },
          { status: 504 }
        );
      }
      throw fetchError;
    }
  } catch (error) {
    console.error("RSVP API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
