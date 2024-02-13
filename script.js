const showWarningInChromiumWithNoSupport = () => {
    if (!navigator.userAgentData || !navigator.userAgentData.brands)
    return;
const chromium = 
    navigator = navigator.userAgentData.brands.filter(
        (b) => b.brand == "Chromium"
);
    if (!chromium) 
    return;
    if (chromium[0].version >= 107) return;

    document.querySelector(".warning").computedStyleMap.display = "block";

};

showWarningInChromiumWithNoSupport();