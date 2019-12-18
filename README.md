# Payabbhi React Native Sample app

This is a reference app for enabling Payments acceptance using [Payabbhi React Native plugin](https://github.com/payabbhi/payabbhi-react-native).

## Running the sample app

Make sure you have signed up for your [Payabbhi Account](https://payabbhi.com/docs/account) and downloaded the [API keys](https://payabbhi.com/docs/account/#api-keys) from the [Portal](https://payabbhi.com/portal).

1. Run the following commands to include `payabbhi-react-native` module

  ```
  $ npm i react-native-payabbhi --save
  $ npm install
  ```

2. Provide suitable values for the following in `App.js`:

  * `<access_id>`
  * `<amount>`

3. Add logic to get `order_id` from your Mobile Backend (server-side code) in `PaymentActivity.java`

    > TIP: An alternative to having a Mobile Backend for running the sample App is:
    > 1. Generate a unique order_id using curl
    > 2. Copy/paste the generated order_id in `PaymentActivity.java`
    > 3. Once a successful test transaction is completed for a particular order, repeat the above steps

    ```
    curl https://payabbhi.com/api/v1/orders \
      -u access_id:secret_key \
      -d amount=100 \
      -d merchant_order_id=ordRefNo123456 \
      -d currency=INR
    ```

    Provide suitable value for the following in `App.js`:

    * `<order_id>`


4. Start the android application

  ```
  $ react-native run-android
  ```
