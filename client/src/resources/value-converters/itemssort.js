export class ItemsSortValueConverter {
  toView(value) {
    return value.sort((a, b) => {
      return (a["deadline"] - b["deadline"]);
    });
  }
}

