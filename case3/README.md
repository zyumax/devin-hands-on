# Case 3

30分ミニプロジェクト開発を行いましょう。

Devin でゼロから動くものを作りましょう。

## お題

以下から好きなお題を選択してください。

### API Quick‑Start

外部の公開 API を呼び出し、ターミナルで結果を表示する小さな CLI（コマンドラインツール）を作ります。

目標は、たとえば node weather.js Tokyo と入力すると、東京の天気情報が JSON 形式でカラフルに表示されることです。

技術的には、たとえば Node.js を使い、HTTP 通信には Axios もしくは fetch、CLI 引数の処理には commander.js、環境変数の管理には dotenv を利用します。

コマンドを実行して、期待通りの結果が表示されれば成功です。

### Git Insight Dashboard

ローカルの Git リポジトリを解析し、貢献者ごとの変更量をまとめた Markdown レポートを生成します。

目標は、リポジトリ直下に contributors.md が作成され、そこで各開発者の追加行数や削除行数が表形式で示されることです。さらに、総コミット数を示す SVG バッジも添付します。

解析には git コマンドを使い、実装は Node.js なら simple-git や nodegit、Python なら GitPython など、お好みの言語で構いません。

生成されたファイルを Markdown プレビューで確認し、表とバッジが正しく表示されていれば成功です。

### Image Meme CLI

任意の画像にテキストを合成し、ミーム画像を出力する CLI を作ります。

目標は、たとえば meme -i dog.png -t "Such Devin!" と入力すると、 dog_meme.png が生成されるようにすることです。

技術的には、たとえば Node.js であれば画像処理に sharp、引数解析に yargs を、Python であれば Pillow と argparse を利用します。

サンプル画像で生成した後、画像ビューアでテキストの位置やフォントが意図どおりか確認します。

## 成果物

以下は必須として対応してください。

- README.md に：目的／使い方／例 が書かれている
- npm test または pytest が Green
- 動作デモを 30 秒以内に見せられる

以下は任意です。

- GitHub Actions CI を追加
- コードカバレッジ 80％以上

## 制限時間

30 分です。

## 進め方

1. ディレクトリを準備する
   作業用のディレクトリを作ります。`case3` ディレクトリの下に自分の作業用フォルダを作成します。

2. スケルトン（ひな形）を作成する
   プロジェクトの基本的なファイル（例：`index.js`, `package.json`, `README.md` など）を用意します。これにより、開発を始める準備が整います。

3. 実装とテストを作成する
   実際にプログラムを書きます。また、プログラムが正しく動くかを確認するためのテストも一緒に作ります。テストを書くことで、間違いに早く気づくことができます。

4. テストを実行して動作確認する
   作成したテストを実行し、プログラムが正しく動くかを確認します。もしテストが失敗した場合は、どこが間違っているかを調べて修正します。

5. バグがあれば修正する
   テストで見つかった問題（バグ）を直します。直したら、もう一度テストを実行して、すべてのテストが通ることを確認します。

6. CI（自動テストの仕組み）を追加する
   プログラムを変更したときに、自動でテストが実行される仕組み（CI）を設定します。これにより、間違いがすぐに見つかるようになります。
