import { NextRequest, NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwnHt9u04ILFH-Q_BS_6zaSs2vvSJkQGJGdxaR_kSyOkAzDMYxP8BwMvuY0P5VVbGfX/exec";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Отправляем данные в Google Apps Script
    const params = new URLSearchParams({
      name: data.name,
      attending: data.attending,
      alcohol: data.alcohol,
    });

    const googleUrl = `${GOOGLE_SCRIPT_URL}?${params.toString()}`;

    const response = await fetch(googleUrl, {
      method: "GET",
      redirect: "follow",
    });

    const responseText = await response.text();

    try {
      const result = JSON.parse(responseText);
      if (result.success) {
        return NextResponse.json({ success: true });
      } else {
        return NextResponse.json(
          { success: false, error: result.error || "Unknown error" },
          { status: 500 }
        );
      }
    } catch {
      if (response.ok) {
        return NextResponse.json({ success: true });
      }
      return NextResponse.json(
        { success: false, error: "Invalid response from Google" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("RSVP API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
