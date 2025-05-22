import React from "react";

const apiKey = 'a926813f6b23cbc20194c8cdf982f553';
const city = 'Hammond';

export async function weather('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}') {
    const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}');
    return res.json()
  }