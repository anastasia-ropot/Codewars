function index(array, n) {
    const selectedItem = array[n];

    return selectedItem === undefined ? -1 : Math.pow(selectedItem, n);
}
