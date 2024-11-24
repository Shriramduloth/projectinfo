package com.workfolio.utility;

public class Data {

    public static String getMessageBody(String otp) {
        return "<!DOCTYPE html>" +
                "<html lang='en'>" +
                "<head>" +
                "    <meta charset='UTF-8'>" +
                "    <meta name='viewport' content='width=device-width, initial-scale=1.0'>" +
                "    <title>OTP Email</title>" +
                "    <style>" +
                "        body {" +
                "            font-family: Arial, sans-serif;" +
                "            background-color: #f4f4f4;" +
                "            margin: 0;" +
                "            padding: 0;" +
                "        }" +
                "        .container {" +
                "            max-width: 600px;" +
                "            margin: 0 auto;" +
                "            background-color: #ffffff;" +
                "            padding: 20px;" +
                "            border: 1px solid #dddddd;" +
                "            border-radius: 5px;" +
                "        }" +
                "        .header {" +
                "            text-align: center;" +
                "            padding: 10px 0;" +
                "            border-bottom: 1px solid #dddddd;" +
                "        }" +
                "        .content {" +
                "            padding: 20px 0;" +
                "        }" +
                "        .otp {" +
                "            font-size: 24px;" +
                "            font-weight: bold;" +
                "            color: #333333;" +
                "            text-align: center;" +
                "            margin: 20px 0;" +
                "        }" +
                "        .footer {" +
                "            text-align: center;" +
                "            padding: 10px 0;" +
                "            border-top: 1px solid #dddddd;" +
                "            font-size: 12px;" +
                "            color: #999999;" +
                "        }" +
                "    </style>" +
                "</head>" +
                "<body>" +
                "    <div class='container'>" +
                "        <div class='header'>" +
                "            <h2>Your OTP Code</h2>" +
                "        </div>" +
                "        <div class='content'>" +
                "            <p>Dear User,</p>" +
                "            <p>Please use the following OTP to complete your verification process:</p>" +
                "            <div class='otp'>" + otp + "</div>" +
                "            <p>If you did not request this, please ignore this email.</p>" +
                "        </div>" +
                "        <div class='footer'>" +
                "            <p>Thank you for using our service.</p>" +
                "        </div>" +
                "    </div>" +
                "</body>" +
                "</html>";

    }
}