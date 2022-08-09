for (let i = 0; i <= 100; i++) {
    let a = i % 10;  // or use  parseInt(i / 10);
    if (i < 10) {
      console.log(i);
    } else if (i / a == 11) {
      console.log(i);
    }
  }