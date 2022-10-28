enum LoadingState {
    loading,
    loaded="loaded"
}

console.log(LoadingState[LoadingState.loading])

function takeFewStrings(str: "str1"|"str2") : void {
    console.log(str);
}

takeFewStrings("str1")