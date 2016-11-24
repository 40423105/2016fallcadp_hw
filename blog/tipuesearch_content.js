var tipuesearch = {"pages":[{"title":"About","url":"./pages/about/","text":"2016Fall 修課成員網誌","tags":"misc"},{"title":"40423105 11/24作業","url":"./40423105-1124zuo-ye.html","text":"40423105 11/24作業 Solvespace 1. Parts (零件繪製) 範例檔案: http://solvespace.com/bracket.pl An introductory tutorial is available, in which we draw the same part that is shown in the demo video. This covers most of the basic features of SolveSpace, including sketches, constraints, extrusions, and Boolean operations. When we first run SolveSpace, we will begin with an empty part. Initially, our view of the part will be oriented onto the XY plane; the label for that plane is displayed at the bottom left of the screen (#XY, in dark grey). The axes are also indicated by the three colored arrows at the bottom left; the X, Y, and Z axes are drawn in red, green, and blue respectively. When we hover the mouse over any entity, constraint, or other object in the sketch, that object will appear highlighted in yellow. For example, the XY plane, which is drawn as a dashed square, will appear highlighted when we hover the mouse over it. The YZ and ZX planes initially look like dashed lines, because they are being viewed on edge; but they still appear highlighted in yellow when we hold the mouse over them. It is similarly possible to highlight the X, Y, and Z axes (which are drawn as arrows), or the origin (which like all points is drawn as a green square). 翻譯 : 我們提供了一個介紹性教程，其中我們繪製演示視頻中顯示的相同部分。 這涵蓋了SolveSpace的大部分基本功能，包括草圖，約束，擠出和布爾運算。 當我們首次運行SolveSpace時，我們將從一個空的部分開始。最初，我們對零件的視圖將被定向到XY平面上;該平面的標籤顯示在屏幕的左下角（#XY，深灰色）。軸也由左下角的三個彩色箭頭指示; X，Y和Z軸分別繪製為紅色，綠色和藍色。 當我們將鼠標懸停在草圖中的任何實體，約束或其他對像上時，該對象將以黃色突出顯示。例如，當我們將鼠標懸停在其上時，繪製為虛線正方形的XY平面將突出顯示。 YZ和ZX平面最初看起來像虛線，因為它們被邊緣觀看;但是當我們把鼠標放在他們上面時，它們仍然顯示為黃色。同樣可以突出顯示X，Y和Z軸（以箭頭繪製）或原點（像所有點都繪製為綠色方塊）。 Extrude (平行長出或除料) STL 格式 範例:平行長出 STL 格式 範例:除料 Lathe (旋轉繞行長出或除料) Export Triangle Mesh STL 格式 three.js 2. Assembly (零件組立) 3. Linkages (fourbar & multilink) (四連桿與多連桿運動模擬) 4. Compiled & API (編譯與延伸應用) 使用 Virtualbox 虛擬主機執行 Windows 64 位元與 Ubuntu 64 位元環境中的編譯與延伸應用.","tags":"HW"},{"title":"40423105 四連桿機構","url":"./40423105-si-lian-gan-ji-gou.html","text":"40423105 11/17作業 Solvespace 平面四連桿機構模擬 將所得到的點座標的.csv以Excel的畫圖，得到： 首先利用 Brython, 讀取 data 目錄中的 11117.csv 座標檔案, 然後以 splitlines() 及 split() 取出各點的 x 座標與 y 座標後, 將點連成路徑曲線如下: window.onload=function(){ brython(1); } from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar\"] container1 = doc['container1'] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"./../w7/11117.csv\").read() fourbar_list = fourbar_data.splitlines() #container1 <= fourbar_list[0] # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 8 倍 ratio = 8 ''' ctx.moveTo(0, 0) ctx.lineTo(0, 100) ctx.moveTo(0, 0) ctx.lineTo(100, 0) ''' ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath()","tags":"HW"},{"title":"40423105 10/27作業","url":"./40423105-1027zuo-ye.html","text":"40423105 10/27作業 心得:可以非常簡易的畫出四連桿運動的路線 Solvespace 四連桿圖檔: 40423105 w7.csv (請以滑鼠右鍵存檔) 40423105 w7.slvs (請以滑鼠右鍵存檔)","tags":"HW"},{"title":"40423105 9/29作業","url":"./40423105-929zuo-ye.html","text":"40423105 9/29作業 畫圖 from 40423105 on Vimeo . 心得 : 這是我第一次用這個軟體 不過很快就抓到訣竅了.","tags":"HW"},{"title":"40423105 上課筆記","url":"./40423105-shang-ke-bi-ji.html","text":"9/22筆記 網址:http://chiamingyen.github.io/kmolab/blog/index.html 下載網址:140.130.17.17(只能在學校裡使用) 2016fall裡的檔案倒數兩個擇一下載(ana2016fall_os(3.0g)or mini2016fall.7z(98m)) 1.創2016fallcadp_hw 將README打勾 格式:python 加密:agpl 新增gh-pages分支 進入setting 點branches 將master變更為gh-pages 點update 2.git clone 2016fallcadp_hw cd 2016fallcadp_hw git branch git checkout gh-pages git branch(再次檢查) 3.創 學號.github.io 將README打勾 格式:python 加密:agpl 點選create new file 打入index.html 點commit new file 4.創 2016fallcadp_ag100(組別) 將README打勾 格式:python 加密:agpl 將2016fallcadp_ag100 clone下來 cd 2016fallcadp_ag100 git branch git checkout gh-pages git branch(再次檢查) 將自己的2016fallcadp_hw clone網址複製 git submodule add -b gh-pages 網址 學號 git staus(檢查) 依序將隊友的資料夾加入 git add -A git commit -m \"名稱\" git push origin gh-pages 完成 9/29筆記 1.radinsed半徑 2.diameter直徑 3.place放置 4.symmetrically對稱 5.lnitially開始 6.oriented定位 7.axes軸 8.indicated表示 9.respectively分別 10.parallel平行 11.extruding長出 12.automatically自動 13.coincident一模一樣 14.constraint約束 15.horizontal橫 16.perpendicular垂直 17.step圖(格式) 錄影工具:sharex 1.paths 2.task → screen recorder → options 開始錄製:shift+ print screen 射出成型軟體:moldex3d 簡報:shower.js 9/29作業 成品影片:https://vimeo.com/185029053 10/6筆記 proxy設定:proxy.mde.tw 通訊阜:3128 去聲音指令:ffmpeg.exe -i 檔名 -c copy -an out.mp4 字幕指令:ffmpeg.exe -i out.mp4 -vf subtitles=in.srt out2.mp4 安裝pelican指令:pip install pelican","tags":"上課筆記"}]};