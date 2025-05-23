import React from "react";


export async function weather(URI) {
    const res = await fetch(URI);
    return res.json()
  };