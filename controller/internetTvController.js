const internetTVService = require("../service/internetTVService");

exports.getInternetTVOptions = async (req, res) => {
  try {
    const options = await internetTVService.getOptions(req.params.service_id);

    res.status(200).send({
      statusCode: 200,
      statusText: "Succes",
      message: "Success to Get Internet & TV Options",
      data: {
        options,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      statusCode: 500,
      statusText: "Internal Server Error",
      message: "Failed to Get Internet TV Options",
    });
  }
};

exports.getInternetAccountInfo = async (req, res) => {
  try {
    const account = await internetTVService.getAccountInfo(
      req.body.customer_number
    );

    if (!account) {
      res.status(400).send({
        statusCode: 400,
        statusText: "Bad Request",
        message: "Failed to Get Account Info",
      });
    } else {
      res.status(200).send({
        statusCode: 200,
        statusText: "Succes",
        message: "Success to Get Account Info",
        data: {
          name: account.name,
          customer_number: account.customer_number,
          provider: account.provider,
          address: account.address,
        },
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      statusCode: 500,
      statusText: "Internal Server Error",
      message: "Failed to Get Internet Account Info",
    });
  }
};
