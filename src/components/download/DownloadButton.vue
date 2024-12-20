// 添加下载状态检测 const checkDownloadStatus = () => { // 检查本地是否已存在下载文件 //
更新下载状态 isDownloaded.value = true; } const handleDownload = async () => { try { await
downloadGit(); // 下载完成后更新状态 isDownloaded.value = true; // 更新UI显示 updateDownloadUI(); }
catch (error) { console.error('下载失败:', error); } } onMounted(() => { // 监听浏览器下载完成事件
chrome.downloads.onChanged.addListener((delta) => { if (delta.state && delta.state.current ===
'complete') { isDownloaded.value = true; updateDownloadUI(); } }); });
