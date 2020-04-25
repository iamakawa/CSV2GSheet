# What is this
外部で公開されたcsvファイルを読み取り、シートに出力するGoogle App Scriptです。
Githubには岐阜県オープンデータカタログサイトに公開されたコロナウイルス関連情報を掲載しています。
(https://data.gifu-opendata.pref.gifu.lg.jp/dataset/c11223-001)

# how to use
## csvファイルの読み込み
- 本コードをGoogle App Scriptにコピーし、読み取りたい任意のCSVファイルのURLに変更してください
- csvを格納し、本スクリプトを実行するとcsvを読み取り、スプレッドシートに指定した名称のシートが作成されます

## (備考)APIとしてスプレッドシートを出力する方法
- Googleスプレッドシートのメニューで「ファイル->ウェブに公開」で「公開」を選択する
- https://docs.google.com/spreadsheets/d/xxxxx/edit#gid=0
  - スプレッドシートの「xxxx」部分をコピー
- https://spreadsheets.google.com/feeds/list/YYYY/ZZ/public/values?alt=json
  - YYYY:先程コピーした「xxxx」の部分をペースト
  - ZZ: シートを左から数えた順番。左から2番目なら「2」
  - 置き換えた値で実行するとjsonファイルを出力できる。
  - 詳細は[Googleドライブのフォルダに格納したcsvファイルをGASで読み取りスプレッドシート->json化して出力する](https://qiita.com/iori_ama/items/b6cf9c8ee901884d0305)にて、写真付きで公開しています
  
# ref
https://qiita.com/iori_ama/items/83b21a9a308e92e2d9ed
