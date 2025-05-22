import "testing-library/jest-dom";
import {render, screen} from '@testing-library/react';
import {beforeEach, describe, expect, it, vi} from "vitest";
import weather from "./api.jsx";

describe("weather()", ()=>{
    beforeEach(()=>{
        global.fetch = vi.fn();
    })
    it("renders weather in area to the page", async () => {
        global.fetch.mockResolvedValueOnce ({
        ok: true,
        json: async()=> ({city:"Hammond", Temperture:80})
        })
        await expect(weather("https://api.openweathermap.org/data")).render
        weather,
    })
})