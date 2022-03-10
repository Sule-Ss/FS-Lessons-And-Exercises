(async () => {
  console.log('» index.js is running');

  function wait(ms) {
    const start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }

  // *=====================================================
  // *                   PROMISES
  // *=====================================================

  const promise = new Promise((resolve, reject) => {
    // some calculation
    wait(2000);
    const userData = {
      firstName: 'Barry',
      birthYear: 1977,
    };
    /* let successful = Math.floor(Math.random() * 2);
  if (successful)  */
    resolve(userData);
    reject(new Error('Something went wrong!'));
  });

  // promise.then(
  //   (result) => {
  //     console.log(result);
  //   },
  //   (error) => {
  //     console.log(error);
  //   }
  // );

  /* promise
  .then((res) => {
    console.log(res);
    return 'selam';
  })
  .then((r) => {
    console.log(r);
  })
  .catch((error) => {
    console.log(error);
  }); */

  const cayDemle = () => {
    // suyuKaynat(); ->  cayEkle(); ->  bekle(); ->  afiyet();
    suyuKaynat()
      .then((durum1) => {
        console.log(durum1);
        return cayEkle();
      })
      .then((durum2) => {
        console.log(durum2);
        bekle(1500);
        return afiyet();
      })
      .then((durum3) => {
        console.log(durum3);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const suyuKaynat = () => {
    return new Promise((resolve, reject) => {
      const nasip = Math.floor(Math.random() * 5);
      if (nasip) {
        bekle(2000);
        resolve('✅ Su kaynadi');
      }
      reject(new Error('❌ Kettle arizali'));
    });
  };

  const cayEkle = () => {
    return new Promise((resolve, reject) => {
      const cayNasibi = Math.floor(Math.random() * 10);
      if (cayNasibi) {
        bekle(500);
        resolve('✅ Cay eklendi.');
      }
      reject('❌ Cay bitmis');
    });
  };

  const bekle = (ms) => {
    const start = new Date().getTime();
    while (new Date().getTime() < start + ms);
  };

  const afiyet = (m) => {
    return '🫖 Cay hazir afiyet olsun';
  };

  // cayDemle();

  // *=====================================================
  // *                   ASYNC AWAIT
  // *=====================================================

  const prom = new Promise((resolve, reject) => {
    // console.log('Promise is created');
    resolve('Promise is resolved');
  });

  const func1 = async () => {
    return 'Async function is resolved';
  };

  async function func2() {
    wait(1000);
    return 'bla bla';
  }

  // console.log('prom instanceof Promise :>> ', prom instanceof Promise);
  // console.log('func1() instanceof Promise :>> ', func1() instanceof Promise);

  // console.log(func2());

  // async function func3() {
  //   wait();
  //   throw new Error('something went wrong');
  //   // return Promise.reject(new Error('errror'));
  // }

  // func3();

  const cayDemle2 = async () => {
    try {
      const durum1 = await suyuKaynat();
      const durum2 = await cayEkle();
      bekle(1500);
      const durum3 = await afiyet();
      console.log(durum1);
      console.log(durum2);
      console.log(durum3);
    } catch (error) {
      console.error(error);
    }
  };

  // cayDemle2();

  // *-----------------------------------------------------
  // *                       FETCH
  // *-----------------------------------------------------

  /*
GET https://jsonplaceholder.typicode.com/users/8
*/

  /* fetch(url)
.then((response) => {
  // console.log(response);
  return response.json();
})
.then((data) => {
  console.log(data);
});
*/

  const url = 'https://jsonplaceholder.typicode.com/users/8';

  function usingFetch(url) {
    fetch(url)
      .then((res) => {
        console.log(res);
        if (res.status !== 200) {
          throw new Error('Something went wrong!');
        }
        res.json();
      })
      .then((data) => {
        // console.log('user »', data);
        return data;
      })
      .catch((err) => console.error('ERROR »', err));
  }

  // usingFetch(url);

  async function usingAsyncFetch(url) {
    try {
      // ...
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('Somethin wrong!');
      }
      const userData = await res.json();
      // console.log('user data -> ', userData);
      for (const [key, value] of Object.entries(userData)) {
        console.log(key, ' ::=> ', value);
      }
    } catch (err) {
      console.error(err);
    }
  }

  // usingAsyncFetch(url);

  async function usingAsyncFetch2(url) {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('Somethin wrong!');
      }
      return await res.json();
    } catch (err) {
      console.error(err);
    }
  }

  usingAsyncFetch2(url).then((d) => {
    console.log(d);
  });
  // console.log(usingFetch2(url));
  // console.log(usingAsyncFetch2(url));
  const f1 = async () => {
    const sonuc = await usingAsyncFetch2(url);
    console.log(sonuc);
  };

  f1();

  const sonuc = await usingAsyncFetch2(url);
  console.log(sonuc);

  // -----------
  // tüm dosya
  const url2 = 'https://jsonplaceholder.typicode.com/todos';
  const todoList = await usingAsyncFetch2(url2);
  // console.log(todoList);
  todoList.forEach((todoItem) => {
    console.log(`${todoItem.id} \n${todoItem.title} \n${todoItem.completed}`);
  });
})();
