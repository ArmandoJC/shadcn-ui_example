import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Page() {
  return (
    <div className="flex justify-center items-center h-[500px]">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <p className="m-2">@Shadcn</p>
    </div>
  );
}