import React, { useEffect } from "react";
import { useState } from "react";
import { ProfileType } from "@/type";

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
      <h1 className="text-4xl mt-6 border-b-2">Profile</h1>
      <div
        className="prose prose-invert "
        dangerouslySetInnerHTML={{ __html: profile.detail }}
      ></div>
    </div>
  );
}

export default Profile;
