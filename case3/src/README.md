# Case3 Mini-Project Development Environment

30分ミニプロジェクト開発用のNode.js環境です。

## 利用可能なプロジェクト

### 1. API Quick-Start
外部APIを呼び出すCLIツール
```bash
npm start weather Tokyo
```

### 2. Git Insight Dashboard  
Gitリポジトリ分析レポート生成
```bash
npm start git-insight
```

### 3. Image Meme CLI
画像にテキストを合成
```bash
npm start meme -i image.png -t "テキスト"
```

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発モード（ファイル監視）
npm run dev

# テスト実行
npm test
```

## 利用可能な依存関係

- **axios**: HTTP通信
- **commander**: CLI引数処理  
- **dotenv**: 環境変数管理
- **sharp**: 画像処理
- **yargs**: CLI引数解析
- **simple-git**: Git操作
- **chalk**: ターミナル色付け
- **jest**: テストフレームワーク

## 目標

- ✅ README.md に目的・使い方・例を記載
- ✅ `npm test` が実行可能
- ✅ 30秒以内の動作デモが可能

## 制限時間

30分でミニプロジェクトを完成させましょう！
