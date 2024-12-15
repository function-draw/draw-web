## よく使うコマンド

### 開発ビルド
npm run dev

### 本番ビルド
npm run build

## デプロイ手順
ローカルで変更を加えた場合のデプロイ手順です。
buildに出力される_appフォルダが、デプロイするとappにリネームされて読み込まれるせいで
ビルドで出力されたhtmlファイル内のパスが_appで書かれているせいで参照エラーになるので
pushする前に書き換える必要があります(github_pages時代に確認していたバグなので、cloudworksに移行したことで発生しなくなっている可能性あり)

1. 本番ビルドを実装(buildフォルダに出力されます)
2. build/_appフォルダをbuild/appにリネーム
3. build/以下の.htmlファイル内の_appをappに書き換える
  こんな感じの差分になるはず： https://github.com/function-draw/draw-web/commit/6e79a2dac3d8f7dafc3c252d3b0d91b5e7aafac1
4. pushする
