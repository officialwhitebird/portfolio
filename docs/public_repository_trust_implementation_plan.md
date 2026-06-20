# Public Repository Trust Baseline Implementation Plan

Date: 2026-06-21

## Objective

`portfolio` を、公開中の GitHub Pages プロジェクトとして第三者が安全に確認・検証・報告できる状態にする。

サイト内容やデザインは変更せず、repository-level trust と継続的検証を整備する。

## Current Baseline

- `main` と `origin/main` は同期し、作業ツリーは clean。
- GitHub Pages は workflow build で公開され、直近 run は成功。
- ローカル検証コマンドは `npm run lint` と `npm run build`。
- `README.md` と Pages deployment workflow は存在する。
- `CONTRIBUTING.md`、`SECURITY.md`、Issue templates、Pull Request template、独立した CI workflow は存在しない。
- GitHub Private Vulnerability Reporting は無効。
- `main` branch protection は未設定。
- `LICENSE` は存在しない。ライセンス選択は owner decision とし、このフェーズでは推測して追加しない。

## Scope

### 1. Contributor and Security Policies

- `CONTRIBUTING.md` を追加し、Node.js 22、`npm ci`、`npm run lint`、`npm run build`、Pull Request の最小手順を明記する。
- `SECURITY.md` を追加し、公開Issueへ脆弱性情報を投稿しないこと、GitHub Private Vulnerability Reporting を優先経路とすること、未有効時の安全な代替案内を記載する。
- `README.md` から両文書へ到達できるようにする。

### 2. Structured GitHub Intake

- bug report Issue template を追加する。
- feature request Issue template を追加する。
- Pull Request template を追加し、変更概要、検証、visual change、security/privacy の確認欄を設ける。
- Issue templates では秘密情報や個人情報を貼らないよう明示する。

### 3. Continuous Verification

- Pull Request と `main` push で `npm ci`、`npm run lint`、`npm run build` を実行する CI workflow を追加する。
- Node.js 22 と npm cache を使用する。
- 既存 Pages deployment workflow の責務は維持する。
- 重複実行のコストと検証の明確さを比較し、必要最小限の workflow 構成にする。
- 使用する GitHub Actions の major version は実装時に公式 repository / GitHub API で存在と現行性を確認し、証拠を残す。

### 4. README Trust Surface

- CI badge を追加する。
- contribution と security policy へのリンクを追加する。
- 現在のサイト説明、local development、deployment、content policy は保持する。

### 5. Owner-Gated GitHub Settings

以下はファイル実装・検証と分離し、owner の明示承認なしに変更しない。

- GitHub Private Vulnerability Reporting の有効化
- branch protection / ruleset の設定
- repository license の選択
- commit、push、Release、Pages設定変更

## Out of Scope

- Portfolio site のデザイン、文言、掲載プロジェクトの変更
- dependency upgrade
- Dependabot、background automation、scheduled workflow
- custom domain や Pages publication settings の変更
- GitHub account settings の変更
- Rope 文書の更新

## Implementation Sequence

1. SwitchBoard planner が本計画と現行 repository を照合する。
2. implementer が policy files、templates、CI、README links を実装する。
3. diagnostics が action version evidence、diff、lint/build、repository preflight を収集する。
4. verifier が scope、security wording、workflow behavior、検証結果を判定する。
5. Professor が完了報告を作成し、live settings と commit/push を別の owner gate として提示する。

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

## Known Decisions and Risks

- Portfolio source のライセンスは未決定。既存の `repo-ready` が MIT でも、自動的に同じライセンスを適用しない。
- Private Vulnerability Reporting を有効化するまでは、`SECURITY.md` の主要経路は完全には運用可能にならない。
- CI と Pages deployment の双方で build すると実行が重複する。検証境界を曖昧にせず、過剰なworkflowを増やさないこと。
- `repo-ready` の `.env` / Python系 `.gitignore` warning は、この Node.js repository に対する scanner heuristic の妥当性を個別に説明すること。
