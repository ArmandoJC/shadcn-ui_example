'use client'

import { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"


export default function Page() {

  const [value, setValue] = useState("")

  return (
    <div className="flex flex-col justify-center items-center h-[250px]">
      <InputOTP
        maxLength={6}
        value={value}
        onChange={(value) => setValue(value)}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSeparator />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSeparator />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
        {/* <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup> */}
      </InputOTP>

      <div className="mt-2">
        {value}
      </div>
    </div>
  );
}