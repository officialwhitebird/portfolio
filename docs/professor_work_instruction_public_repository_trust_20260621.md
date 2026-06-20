# Professor Work Instruction — Portfolio Public Repository Trust Baseline

Date: 2026-06-21

## Goal

`C:\Users\expex\Projects\portfolio` に public repository trust baseline を実装し、公開中の GitHub Pages source repository として安全で検証可能な状態にする。

## Required Context

最初に以下を読むこと。

- `C:\Users\expex\Projects\portfolio\AGENTS.md`
- `C:\Users\expex\Projects\portfolio\README.md`
- `C:\Users\expex\Projects\portfolio\package.json`
- `C:\Users\expex\Projects\portfolio\.github\workflows\deploy-pages.yml`
- `C:\Users\expex\Projects\portfolio\docs\public_repository_trust_implementation_plan.md`

Next.js source を変更する必要が生じた場合のみ、`node_modules\next\dist\docs\` の該当文書を先に読むこと。ただし本作業では site source の変更を想定しない。

## Current State

- Branch: `main`
- Local and remote: synchronized at `8d36691`
- Working tree: clean before plan files were added
- Pages deployment: active; latest observed run succeeded
- Baseline preflight: `0 error, 4 warning, 3 info`
- Existing verification: `npm run lint`, `npm run build`
- Missing trust files: contributor policy、security policy、Issue templates、Pull Request template、standalone CI

## Constraints

- site design、content、dependencies、lockfile、Pages configuration を変更しない。
- repository license を推測して追加しない。
- paid API、background process、scheduled automation を使用しない。
- GitHub Private Vulnerability Reporting、branch protection、ruleset、account settings を変更しない。
- commit、push、Release、publication を行わない。
- secrets、個人情報、private repository details を成果物へ含めない。
- 使用する GitHub Actions version は公式repositoryまたはGitHub APIで存在を確認する。
- 現行の Pages deployment を壊さない。

## Requested Deliverables

- `CONTRIBUTING.md`
- `SECURITY.md`
- `.github/ISSUE_TEMPLATE/bug_report.md`
- `.github/ISSUE_TEMPLATE/feature_request.md`
- `.github/pull_request_template.md`
- 必要最小限の CI workflow
- README の CI badge と policy links
- action version evidence
- lint、build、repo-ready preflight、diff validation の結果
- implementation / diagnostics / verification artifacts

## Acceptance Criteria

- `CONTRIBUTING.md` と `SECURITY.md` が追加され、README からリンクされている。
- bug report と feature request の Issue templates、および Pull Request template が存在する。
- CI workflow が `npm ci`、`npm run lint`、`npm run build` を Node.js 22 で実行する。
- GitHub Actions の参照versionについて公式の存在確認証拠が保存されている。
- `npm run lint` が exit 0 で完了する。
- `npm run build` が exit 0 で完了する。
- `repo-ready check .` が error 0 で完了し、残る warning が説明されている。
- site source、visual design、dependencies、Pages settings、live GitHub settings は変更されていない。
- owner の承認なしに commit、push、Release、publication、paid API、background process を実行していない。
- SwitchBoard verification の最終判定が明示されている。

## Completion Report Requirement

SwitchBoard 完了後、次を含む簡潔な報告書を `portfolio\docs` に保存すること。

- run_id / mode / status / verdict
- files changed
- validation commands and numeric results
- action version evidence
- preserved scope and settings
- remaining owner gates and risks
