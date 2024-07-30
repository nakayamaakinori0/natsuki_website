import React, { useEffect } from "react";
import { useState } from "react";
import { ProfileType } from "@/type";
import Link from "next/link";

function Profile() {
  const [profile, setProfile] = useState<any>({});
  useEffect(() => {
    const func = async () => {
      const res = await fetch("/api/profile");
      const data: ProfileType = await res.json();
      setProfile(data);
    };
    func();
  }, []);
  if (!profile) return null;

  return (
    <div>
      <div className="flex border-b-2">
        <Link href="profile/">
          <h1 className="pl-5 text-4xl mt-6 hover:text-accent">Profile</h1>
        </Link>
      </div>
      <div
        className="prose prose-invert px-10 mt-4"
        dangerouslySetInnerHTML={{ __html: profile.detail }}
      ></div>
    </div>
  );
}

export default Profile;
