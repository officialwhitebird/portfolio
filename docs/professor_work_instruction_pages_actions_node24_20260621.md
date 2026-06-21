# Professor Work Instruction — GitHub Pages Actions Node.js 24 Migration

Date: 2026-06-21

## Goal

`C:\Users\expex\Projects\portfolio\.github\workflows\deploy-pages.yml` の公式ActionsをNode.js 24対応majorへ更新し、GitHub Pages run `27884459692` で観測されたNode.js 20 deprecation warningを解消する。

## Required Context

- `C:\Users\expex\Projects\portfolio\AGENTS.md`
- `C:\Users\expex\Projects\portfolio\.github\workflows\deploy-pages.yml`
- `C:\Users\expex\Projects\portfolio\.github\workflows\verify.yml`
- `C:\Users\expex\Projects\portfolio\package.json`
- `C:\Users\expex\Projects\portfolio\docs\pages_actions_node24_implementation_plan.md`
- GitHub Actions run: `https://github.com/officialwhitebird/portfolio/actions/runs/27884459692`

## Requested Change

`deploy-pages.yml` の以下5行だけを更新する。

```text
actions/checkout@v4               -> actions/checkout@v7
actions/setup-node@v4             -> actions/setup-node@v6
actions/configure-pages@v5        -> actions/configure-pages@v6
actions/upload-pages-artifact@v3  -> actions/upload-pages-artifact@v5
actions/deploy-pages@v4           -> actions/deploy-pages@v5
```

## Constraints

- workflowのtrigger、permissions、concurrency、jobs、inputs、commands、Node.js 22、artifact path、environmentを変更しない。
- site source、dependencies、lockfile、Verify workflow、GitHub settingsを変更しない。
- 新しいworkflowやautomationを追加しない。
- commit、push、Release、manual workflow dispatchを行わない。
- paid API、background processを使用しない。
- action versionは公式GitHub APIまたは公式repositoryで再確認し、証拠を残す。
- 変更範囲に矛盾があれば実装を拡張せず、停止して報告する。

## Required Evidence

- 5 major tagsのrefとSHA
- 各latest releaseのtagと公開日
- workflow semantic preservation check
- `npm run lint`
- `npm run build`
- `repo-ready check .`
- `git diff --check`
- `git status --short`
- 対象外ファイルが変更されていない証拠

## Acceptance Criteria

- `.github/workflows/deploy-pages.yml` の5つのActions参照が計画したmajorへ更新されている。
- 5つのmajor tagが公式GitHub APIで解決でき、release evidenceが保存されている。
- workflowのtrigger、permissions、jobs、Node.js 22、commands、artifact path、environmentが変更されていない。
- site source、dependencies、lockfile、Verify workflow、live GitHub settingsが変更されていない。
- `npm run lint` がexit 0。
- `npm run build` がexit 0。
- `repo-ready check .` がerror 0で、warningが説明されている。
- `git diff --check` がexit 0。
- commit、push、Release、workflow dispatch、background processをowner承認なしに実行していない。
- SwitchBoard final verdictが明示されている。

## Completion Report

完了後、`docs/switchboard_completion_pages_actions_node24_20260621.md` に以下を保存する。

- run_id / mode / status / verdict
- exact workflow diff
- action version evidence
- validation results
- preserved behavior
- remaining live verification gate
