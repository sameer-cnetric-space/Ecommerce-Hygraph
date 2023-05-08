// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tFCdB9RniJYEQSN35DC9AW
import * as React from "react";
import { GraphCMSCredentialsProvider } from "@plasmicpkgs/plasmic-graphcms"; // plasmic-import: hNB_eBOLhAQ/codeComponent

export default function GlobalContextsProvider(props) {
  const { children, graphCMSCredentialsProviderProps } = props;
  return (
    <GraphCMSCredentialsProvider
      {...graphCMSCredentialsProviderProps}
      apiUrl={
        graphCMSCredentialsProviderProps &&
        "apiUrl" in graphCMSCredentialsProviderProps
          ? graphCMSCredentialsProviderProps.apiUrl
          : "https://api-ap-south-1.hygraph.com/v2/clha5ckin0zt001tedwyv4dyu/master"
      }
      authToken={
        graphCMSCredentialsProviderProps &&
        "authToken" in graphCMSCredentialsProviderProps
          ? graphCMSCredentialsProviderProps.authToken
          : "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODMyNjY4NTgsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NsaGE1Y2tpbjB6dDAwMXRlZHd5djRkeXUvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6IjBhN2ZiMjgxLWNkODQtNDE5Yy04ODliLWI4ZjM2OTA2ZjFkNiIsImp0aSI6ImNsaGE1bWtsNDEwOHMwMXRlODJzaGR1eWIifQ.ZtHe83QqB9kv-vipJK4-GQ8VKGYHPhYZIckWEAannKKLXCirctWRVTR9a64EPKBhMGAqlUvu2TppXL-ayOu1QDhZ63SYaVZjpkTlio4b8djjnfV0WEByptSDykkdHfBOF22-YitdvfBCFWXEGnL6tI7A9_VX4fvV-rzv2Mp-VBJ_9ckZw-0TcO1VL_dvksFTfRi2YcopMSoRxhqntTyFRFhVl_YeJen-xFr010_fp2yv7WRcbbteRCPcZGUXwtWd8jry6c04HrwxYsEwCF2_eGzAQxpapV1JC-5xokQF0iDGXMXOHjn9RHDUiLwSXi3SMpVU3XPVJCcDTT8bhAouXqcJUmhew0961evX9iApe7XNDgftPWyHO5ZNEDpliD3doNAcGKxYpiZiSAvZLu3zHJj49aLyRGriBwKv66Ssei7oGj3Qq0vEqmsxm8NK-PKTNlLuE1cUkA2pPezbeOPJ0W2LP7Ge9LGeUbyy5Uz7O50jhqo5W26cKJV9gp0iTFtiKCREmKlFIacpe501Tua4KhYwUOIt5GOhgIeq5SN5gsClFf-aQNK0soYqARJJeTbMLk6xabW74tfr8-LkmV5P4JxjMNblMiXxnCKp_jWqgwnQvpB7iaP_4u7A2Z3ONVDCoOgacZUe1XTpzQWx0HW-mtvONymSqgtfqlvc1g7vdks"
      }
    >
      {children}
    </GraphCMSCredentialsProvider>
  );
}
