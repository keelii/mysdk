import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import {get, post} from "../src/index.ts";

Deno.test("request 正常返回 GET 请求", async () => {
    const data = await get("http://httpbin.org/get?foo=bar");
    assertEquals(data.args.foo, "bar")
})

Deno.test("request 正常返回 POST 请求", async () => {
    const data = await post("http://httpbin.org/post", {foo: "bar"});
    assertEquals(data.json.foo, "bar")
})
