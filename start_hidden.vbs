Set WshShell = CreateObject("WScript.Shell")
' Launch Backend hidden
WshShell.Run "cmd /c cd backend && npm run dev", 0, false
' Wait a bit for backend to initialize
WScript.Sleep 5000
' Launch Frontend hidden
WshShell.Run "cmd /c cd frontend && npm run dev", 0, false
