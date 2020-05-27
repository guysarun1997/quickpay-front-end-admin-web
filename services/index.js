
var Service = {
  //signin
    signin : function(accessToken) {
        return new Promise( async(resolve,reject)=>{
            //var raw = JSON.stringify(accessToken);      
            var requestOptions = {
              method: 'POST',
              headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${accessToken}`
              },
            //  body: '',
              // redirect: 'follow'
            };
            console.log(requestOptions)
           await fetch("https://quickpay-admin-dev.advws.com/auth/login", requestOptions)
              .then(response => {
                 if(response.status === 200){
                  resolve(response.json())
                 }else{
                  if(response.status === 401) {
                    liff.logout();
                    window.localStorage.clear();
                    window.location.reload();
                  }
                  reject(response.json())
                 }
              })
              .catch(error => reject(error.json()));
        })     
    },

    //get transactions
    getTransactions: function(saction,filters) {
      console.log(saction)
      return new Promise(async(resolve, reject) => {
        console.log(saction)
        var requestOptions = {
          method: 'POST',
            headers: {
              "Content-Type": "application/json",
              'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          },
          body: JSON.stringify(filters),
          redirect: 'follow'
        };
        console.log(requestOptions)
        await fetch("https://quickpay-admin-dev.advws.com/api/v1/transection/" + saction, requestOptions)
          .then(response => {
            if(response.status === 200){
              resolve(response.json());
            } else {
              if(response.status === 401) {
                liff.logout();
                window.localStorage.clear();
                window.location.reload();
              }
              reject(response.json());
            }
          })
          .catch(error => reject(error.json()));
      })
    },

    // download
    download: function(objdata) {
      return new Promise(async(resolve, reject) => {
        var requestOptions = {
          method: 'POST',
            headers: {
              "Content-Type": "application/json",
              'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          },
          body: JSON.stringify(objdata),
          redirect: 'follow'
        };
        console.log(requestOptions);
        await fetch("https://quickpay-admin-dev.advws.com/api/v1/transection/download/excel", requestOptions)
          .then(response => {
            console.log(response)
            if(response.status === 200){
              resolve(response.blob());
            } else {
              if(response.status === 401) {
                liff.logout();
                window.localStorage.clear();
                window.location.reload();
              }
              reject(response);
            }
          })
          .catch(error => reject(error.json()));
      })
    },

    //get merchants https://quickpay-admin-dev.advws.com/api/v1/merchant/profile
    getMerchant: function() {
      return new Promise(async(resolve, reject) => {
        var requestOptions = {
          method: 'GET',
            headers: {
              "Content-Type": "application/json",
              'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          },
          // body: JSON.stringify(objdata),
          // redirect: 'follow'
        };
        console.log(requestOptions);
        await fetch("https://quickpay-admin-dev.advws.com/api/v1/merchant/profile", requestOptions)
          .then(response => {
            console.log(response);
            if(response.status === 200) {
              resolve(response.json());
            } else {
              if(response.status === 401) {
                liff.logout();
                window.localStorage.clear();
                window.location.reload();
              }
              reject(response.json());
            }
          })
          .catch(error => {
            reject(error.json());
          })
      })
    },
    //update merchants
    updateMerchant: function(data, merchantID) {
      return new Promise(async(resolve, reject) => {
        var requestOptions = {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            },
            body: JSON.stringify(data),
            redirect: 'follow'
        };
        console.log(requestOptions);
        await fetch("https://quickpay-admin-dev.advws.com/api/v1/merchant/profile/update/" + merchantID, requestOptions)
        .then(response => {
          if(response.status === 200) {
            resolve(response.json());
          } else {
            if(response.status === 401) {
              liff.logout();
              window.localStorage.clear();
              window.location.reload();
            }
            reject(response.json());
          }
        })
        .catch(error => {
          reject(error.json())
        })
      })
    },

    // get data pie chart
    getPieChart: function() {
      return new Promise(async(resolve, reject) => {
        var requestOptions = {
          method: 'GET',
            headers: {
              "Content-Type": "application/json",
              'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          },
          // body: JSON.stringify(objdata),
          // redirect: 'follow'
        };
        console.log(requestOptions);
        await fetch("https://quickpay-admin-dev.advws.com/api/v1/transection/dashboard", requestOptions)
          .then(response => {
            console.log(response);
            if(response.status === 200) {
              resolve(response.json());
            } else {
              if(response.status === 401) {
                liff.logout();
                window.localStorage.clear();
                window.location.reload();
              }
              reject(response.json());
            }
          })
          .catch(error => {
            reject(error.json());
          })
      })
    }
  


    
} 
