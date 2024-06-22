import React, { useEffect } from "react";
import { useState } from "react";
import { client } from "@/libs/client";

function Profile() {
  const [profile, setProfile] = useState<any>({});
  useEffect(() => {
    const func = async () => {
      const res = await client.get({ endpoint: "profile" });
      setProfile(res);
    };
    func();
  }, []);
  if (!profile) return null;

  return (
    <div>
      <h1 className="text-4xl mt-6 border-b-2">Profile</h1>
      <div
        className="mt-4 [&>h1]:text-2xl [&>h2]:text-xl"
        dangerouslySetInnerHTML={{ __html: profile.detail }}
      ></div>
    </div>
  );
}

export default Profile;
