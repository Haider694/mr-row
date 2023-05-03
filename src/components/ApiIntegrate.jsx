import React, { useEffect } from "react";

export default function ApiIntegrate() {
  const token = localStorage.getItem("access_token");
  useEffect(() => {
    postData();
    getData();
  }, []);

  const postData = async () => {
    const res = await fetch(
      "https://ap-south-1.aws.realm.mongodb.com/api/client/v2.0/app/application-0-vfxlb/functions/call",
      {
        method: "POST",
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: "find",
          arguments: [
            {
              database: "mrRao",
              collection: "menu",
              query: {},
            },
          ],
          service: "mongodb-atlas",
        }),
      }
    );

    const data = await res.json();
    if (data.status === 422 || !data) {
      console.log(data);
    } else {
        console.log(res)
      console.log(data);
    }
  };



const getData = async () => {
    const res = await fetch('https://ap-south-1.aws.realm.mongodb.com/api/client/v2.0/app/application-0-vfxlb/auth/providers/local-userpass/login', {
        method: "POST",
        address: '65.0.217.240:443',
        headers: {
            Accept: '*/*',
            'Content-Type': 'application/json',           
        },
        body: JSON.stringify({
            "username": "nikhil.yadav@softsages.com",
            "password": "ETHWLNimMBHM7yd",
            "options": {
                "device": {
                    "sdkVersion": "2.0.0",
                    "platform": "ios",
                    "platformVersion": "13.0.3",
                    "deviceId": {
                        "$oid": "6429681a7bdf89ee9c5d6033"
                    }
                }
            }
        })
    })

    const data = await res.json();
    if (data.status === 422 || !data) {
        
        console.log(data);
    }
    else {
        const token=data.access_token
    window.alert("Succesfulyn added token")
    
        localStorage.setItem('access_token', `${data.access_token}`)

      }
}
  return (
    <>
      <h1>hvhj</h1>
    </>
  );
}
