#!/usr/bin/env node

const fetch = require("node-fetch");

const API_KEY = "d3407870b355806b0089f717323c54da692a6407";
const SHA = process.env.COMMIT_REF;

if (!process.env.NETLIFY || process.env.CONTEXT !== "production") {
  console.log("Not a Netlify build — doing nothing");
  return;
}

fetch(
  "https://app.sleuth.io/api/1/deployments/learnwithjason/sleuth-11ty-project/register_deploy",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      api_key: API_KEY,
      sha: SHA,
    }),
  }
)
  .then((res) => {
    console.log({
      status: res.status,
      ok: res.ok,
    });
    return res.text();
  })
  .then((res) => {
    console.log({ res });
  });
