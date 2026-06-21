# GitHub Pages Actions Node.js 24 Migration Plan

Date: 2026-06-21

## Objective

GitHub Pages deployment run `27884459692` で発生したNode.js 20 runtime deprecation warningを解消するため、既存Pages workflowの公式ActionsをNode.js 24対応majorへ更新する。

## Current Evidence

対象workflow:

`C:\Users\expex\Projects\portfolio\.github\workflows\deploy-pages.yml`

直近runはbuild・deployとも成功したが、GitHub Actions annotationで以下が警告された。

- `actions/checkout@v4`
- `actions/setup-node@v4`
- `actions/configure-pages@v5`
- `actions/upload-pages-artifact@v3` が内部利用するartifact action
- `actions/deploy-pages@v4`

これらはNode.js 20対象で、runner上ではNode.js 24へ強制実行された。

2026-06-21に公式GitHub APIで確認した移行先:

| Action | Target major | Latest release observed | Major tag SHA |
|---|---:|---|---|
| `actions/checkout` | `v7` | `v7.0.0` | `9c091bb21b7c1c1d1991bb908d89e4e9dddfe3e0` |
| `actions/setup-node` | `v6` | `v6.4.0` | `48b55a011bda9f5d6aeb4c2d9c7362e8dae4041e` |
| `actions/configure-pages` | `v6` | `v6.0.0` | `45bfe0192ca1faeb007ade9deae92b16b8254a0d` |
| `actions/upload-pages-artifact` | `v5` | `v5.0.0` | `fc324d3547104276b827a68afc52ff2a11cc49c9` |
| `actions/deploy-pages` | `v5` | `v5.0.0` | `cd2ce8fcbc39b97be8ca5fce6e763baed58fa128` |

公式release notesでは、`configure-pages@v6` と `deploy-pages@v5` はNode.js 24移行を明記し、`upload-pages-artifact@v5` は内部の `upload-artifact` をv7へ更新している。

## Scope

`.github/workflows/deploy-pages.yml` の `uses:` 5行のみを更新する。

```text
actions/checkout@v4               -> actions/checkout@v7
actions/setup-node@v4             -> actions/setup-node@v6
actions/configure-pages@v5        -> actions/configure-pages@v6
actions/upload-pages-artifact@v3  -> actions/upload-pages-artifact@v5
actions/deploy-pages@v4           -> actions/deploy-pages@v5
```

加えて、計画・作業指示・完了報告とaction version evidenceを `docs/` に保存する。

## Preserved Behavior

- trigger: `push` to `main` と `workflow_dispatch`
- permissions: `contents: read`、`pages: write`、`id-token: write`
- concurrency policy
- Node.js application version: `22`
- npm cache、`npm ci`、`npm run build`
- `PAGES_BASE_PATH`
- artifact path: `./out`
- `github-pages` environment とdeployment URL

## Out of Scope

- site source、design、content
- `package.json`、`package-lock.json`、dependencies
- `.github/workflows/verify.yml`
- Pages repository settings、custom domain、branch protection
- LICENSE、2FA、Rope
- Dependabot、scheduled/background automation
- commit、push、Release、manual workflow dispatch

## Validation

1. workflow diffが5つの `uses:` 行だけであることを確認する。
2. 5つのmajor tagを公式GitHub APIで再確認する。
3. workflow structure、permissions、inputs、jobsが保持されていることを静的に確認する。
4. `npm run lint` と `npm run build` を実行する。
5. `repo-ready check .` と `git diff --check` を実行する。
6. SwitchBoard verifierが明示的なPASS/FAILを返す。
7. owner承認後に限りcommit/pushし、Pages run成功・warning消失・site HTTP 200を確認する。

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

## Risks

- 5つのmajor upgradeを同時に行うため、公式に存在しても組み合わせの実機互換性はpush後のGitHub Pages runまで確定しない。
- `main` pushはPagesを自動deployするため、live検証には別のowner gateが必要。
- major tagsはcommit SHA固定より供給網の可変性が高い。既存運用と可読性を維持するためmajor tagsを使用するが、SHA pinningは別のsecurity policy decisionとする。
