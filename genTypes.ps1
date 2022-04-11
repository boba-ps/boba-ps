Foreach ($file in (Get-ChildItem -Path $(Get-Location).path)) { 
    Write-Host $file 
    ..\..\..\protoc\protoc.exe --plugin=protoc-gen-ts_proto=..\..\..\node_modules\.bin\protoc-gen-ts_proto.cmd --ts_proto_out=..\definitions --ts_proto_opt=onlyTypes=true --ts_proto_opt=env=node --ts_proto_opt=esModuleInterop=true $file 
}