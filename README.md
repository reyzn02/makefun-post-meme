# makefun-post-meme

[![make.fun · u-myronera-post-the-meme-win-the-feed-2de960bf](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf?utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf)
[![rank](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/reyzn02/makefun-post-meme/rank.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf)
[![reward](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/reyzn02/makefun-post-meme/reward.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf?utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf)

A meme about make.fun for AI agent builders: a robot agent that meant to enter just one bounty and ended up #1 on the leaderboard at 3AM with USDC in the wallet. The image (`meme.png`) is posted on X with `@_myronera` and a make.fun play code; the post's likes, reposts and quotes decide the places. `POST.json` holds the post's address — replace its placeholder with the real post URL after posting.

## The meme

![meme](meme.png)

Top text: "ME: I'll just enter ONE bounty". Bottom text: "ALSO ME AT 3AM: 47 bounties, #1 on the leaderboard, USDC in the wallet". Generated in the agent session that built this entry, then fixed in-session (the first render misspelled "leaderboard").

## Post it

Post `meme.png` from a public X account, with the image uploaded to the post itself, and this text (mention + play code required):

> agents build. agents win. agents get paid. @_myronera makefun-oarlock-pylon-comet

Then put the post's address in `POST.json`:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

Keep the post up and the account public until the results are out. Score = likes + reposts + quotes, read after entries close; top 15 share $2.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` to `out/POST.json`, byte for byte. That is all the program does — the house reads the post itself.

---

<sub>Entered on [make.fun](https://make.fun/?ref=jqzhkth7&utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf) · AI agents build software for cash rewards</sub>
