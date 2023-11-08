import moment from 'moment';
const CotizadorUtil = (dataText: string, total: string) => {
  const htmlTemplate = `
  <div
  style="
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    align-items: center;
  "
>
  <div
    style="
      display: flex;
      width: 400px;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 5px;
    "
  >
    <img
      width="223"
      height="72"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN8AAABICAMAAABBRNDlAAACvlBMVEUAAAAFAQwKCgoSEhIaGhoiIiIsLCw0NDQ7OzsNXy8AZywBZjMBbjMCbTkAczQAdzwAfDAAfTgcdjkAekELfEYfdkwjVkMqVEAhekA9d08zelA1cXJLS0tSUlJcXFxiYmJqampubnB0dHR5eXl6e319fX0GXqYXXqAZX7UEYK0NZ6UPZ64EZ7oMZbIMZ7oNabMNabkTZaYXZa0Taa0ZZqwfaqQTZrISabETbLwba7MTca8bcLEZcbsmXZM6Y4kwYpc8Z5E7bZkhbKUgcbIicLs2eKwyc7M8c7MAgS8AgjoAjj8AmT0Cg0IBikIGk0UFmkYKnE0SkkUJrEkerk0WskUUtEses08fvU4esVEcuFMjplglq1gksl4sslE+tVs9ulYqtm04qGAtwFhAmFtInm1At1lCs2pLtHtdunNuwXtwwHcxgMNoh718rolIgchAkdJcodxLoOFjisNsj89sm8d4ndFgpehe1ZFjw4Zhx5Vl0ZVy6Jp1wPqDg4OHh4mLi4uRkZGUlJSZmZmcnJ2UtZaWpr2ioqKoqKitra2zs7O5ubm7u729vb2AnMyArsaHodSdr9eZqd2tvsioueSGzYeAz42OzZaE0I+czqib2K6S8rWV9biR/7+uz6Km2qms3bCw16q5472Eycae/8a9y9S83sWqwOmi2P++yOWl4/+v4P+7/+DBwcHCwsTFxcXHx8nJycnNzc3H3sHR0dHV1dXX19na2trb293d3d3U3PPE48PO89fR69Da8d3b+d3K5f/Z6/fV/+je9eXd9ejU9f/V///f//Dh6tnh4eHl5eXk7+fq6urp6ezv6u7t7e3s7vLq9+7u/+7k//Hm///t9P7u//Lu//3z8eT3+Or/9ezx8fHx9vLx9fb19fX39vnx//T0/v3/9v/9/fT6+vr7+/76/vr5/v79+fj++v7+/vnCd5TEAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAFvlJREFUaIHtm/lzFNedwEdzaRIfGIJrk+zoBP0ShZKCsAYFaquMDASCDQLDEo7EWlSSsECwskjJXkuamfb2pbHBB0KKq+zIiwhlj+bInLJEEJBad6OuHoUI4mrNPI312nL8X+x7r+eS0Ai5sF3OVr5VSK2+3vv09/u+Vze6ZHLuSzUlX85BFcYnPrry6tkzbT+vqrI903b21T9cn4ir6tycmhUQT0L1H0N0yc/ntLnCeRXOzU6MvtW58+lt9Vu22GxVNtuWbdu373z9cgzm8sUvR+4t4P0Oiy69gQmSE5d/27atzlZVbbPZams31tbW1FRX27a2XZlW1WTqxOTEhc6r95bTH4yJQkSQvhMqzvJ9Aac/PL+zflONrXLDhg2Yr9Zmq6mpqtr8zNnrSRV+jucL4fTo+VNX7yU/z3tHIAV4hqYZV+LbmP+DJM33dxVOXGjfaqsiotFtRmybbTVt50aTeG1ii5ybudLZcRUgLSbz3BCEOLbPH4wEgt8hvvn5+XvXz22vq6615fAh9VXZtnW8PZH8fJ54mHlkm6dOXb0L8RVL3w8EaZcIljoClfg3RpFfNL5kMhnqqK/bjPgwl8Zms1X+xHbmwmhc0xZyQ/dGO9vPXl3udlCkR/JgJPzBr332DxYdmXjy3oftWxAQxqslOtxgq6yp3NZ+YXQ6CVHQQAqEyT+/2b6983o+wySSYFklvQ3kuBIWgYy3ZUWVOXcwOElUq4QDS+v46xddEjlOmIx0bKmprMR8NtsGbKEbNlTW/+eV6yldoFPU+Gjn9vpz15efl+AUMtuiK8izXoFDVwAuBESa5lg6gP4SOJalg9+Oe9XBL1Wo3uisq9tYg+JCddWGquoq21NPPdX+xtWJaU1Xf0d2d2/ig/b6p9+YWFZ7KnTTGfWpUYb1S7EAi0AAHVY8VFCW/ZSgyqxLkjyU/I1ypUWHpw/e3FG32VZZidSGXEvdxvq2s6euT8VTcR/9Ssb+0LGjfsf5B+CpgMXaUkFCiQM1ZHcpKvBwaIdMS2GGjSHLZPuAn5VUVaJD3zgbFuxfklfbbT/9KbLPmk2b6rdv73z9rdBEDGQMcT45/dHZtq1b2pEjRUtRS1yWzl8A04cvE9xcXxD6aRHlOn0jeActhXwcChjAy8R4N3piCuP9NvCQfcLk1IWd9c9srd+xo6397G9fvfLh6IQUi8M03/z09Td3bqnZ0n7lr0n1SzWVrebhYzGEKrhYBwf8mFVh/WhHkI2BAFYk4hPJnhjj/zbwVN3cXPxy56lTHS+dO3/+wttXro4imZieRkuPrEx1evTCma2bq7e1X7734LtBn5MsKxjn3Iobay7GRNDPEU6Ju3m0AXheIGQSFf0msTKi+xKOvt5x6qVz586/eeHttwngxDQgSw+p9s8fnu/Ytql6Y33HhzklA4QwT3ifpDxE7wkmEOM9eAc9iZXoTsQ4/KdIRyTWh/VIKyABsCwzOfigE1bAp8YudKT4MCDim4inqgU4cfWNM5s3b66t2/Fvl5Npi5xXv5ibm8uXvgQojwSh7HcImh1KVARKbrsfSOhPIHB9IOHiFBChvCDQU9Hd3ePPHyfiTDcSSnoovnuj7e3tHS+9dO718xeIfcYA0Vzyz6hSat+xzVZbXbfzAjP5OdQmkrwzNHwX5kwKJiaj4bAgazoHAYbhOIbxJgQWW2Ccp3nOTUehRPM+D+eWVYjCH8e4FcgY9Hq9kc6vH6kInaC3hB+Kb+q/d+zM8F25OkGiAgQTV851bK9D9UNd3eYzV6aSaSJ4Z6hr8G4aD6J0c32x1WKxWIuK19F+BapADHq9AQGocREnB1AO+MKKoKgiNeIPRnF0hKLfF0IbrEGn0xmY/HxyETpBZ3mohaq7/jTm6+hAfG9cuDoNkvf++text8+2tz1TU2Orrqqqqe+8Pp3GgbNT73YN3kqzKq6yQpNBryOiNxjNJVycrJpcm8N/QRwilATI2YX4jA/gUzQ+8aH4Pnx62w7E14kW4IWrEzFUv58/tX3HM5tRcYQKwaqq+t9OZIpZCKdcXb+7mQryIFBuTrGlRV+eLysBQXbxLo7wccvwFRO+h1t/r9ZXVz2zo62t7cyZM2fPnmnbUb91ax1KsyurcA3/1NNvxSD8u0Y3e/dWf9fwlEb7hcJa0pojQrYYJc84Wh6TK5AzoSuMfH6+BOGzPhzfmS3Vtk0/27Rx4yaUvNRvsVXh6gHXR1VVlTXb2otFiAM6dpfJO2P9Xe+mMu4vZMqkwRkLi0rXrSstKjQadIV5SyDg9yzexRO+vvz+E5QQvodKVHVttdW1m3AbwoY1VlWdqo8qUfVXuf2NCQXXssggoTp/53+6uoaJz5iDUKGMhM5UygpKHIki8BWW7vzP+v44pvG5luEr1T88X93G6tqaFB8GrK3bSHRXuWkbzsiIaWK+5MTQKxcvE0+DwmOCTE6nt7JKZt4QCMJXCca8GfONPIivKJ/Jr0h0G20YC/2oqSSGubm2diMi3GDbeW509tNMvZAc/aCric9cFrQQvJLgQ2QXfYTPk58Pfh18dXWVBC/FV0s6gzWV2zuuTMzMzKQGT9658nJL/2serYWGovZ6PHJB0UMVqS7C513mFmWE76H6VLq2LRiv2mbDfLbN1dhUN2w689bo7b/JM0lS3Krq2GDLC7+7QfrbhM9biNVX2Ldy7S1x5kr58g0C812Zu9R1Z+tramsx38Ya0jirtP3sqe2dl6/dvH17hvQ84eyNwa5mFNVnsZfR7rwOpx76iuUsByaiPGW3O1ANDwS2O5AdE4gjjMPuZB0L+bQLHIxXzsx7MR9UgpzTYae4gJwIM46ss4YgwtPonsyIBESuO6f0QvFvk6a/TbXV1dXIaVbWdw4Oj3/yye2/zJLXEfHxi83HXh6+lTP3MFl9ZtcydEpfmcVsRGIyW0usJuNIepYJf4XVbMIHTPpcPmWknFxgMhfRIszyFRRnsh6BKbGYyD0Li9CW1ZsdDF1rygxmygm1uusdiA6VCHUkLmx86l9bBt4f+nh8/NYUxksKxRdfOHrk9HiqWaEVt4ypAE2tOL/jBoEyUza1QVuGQKrZIfaYDbkZT5pP7MlcUGAsSWm7PJcPjBQvvKclkB4sN49CW6acB6+bvtL288rKn/wMy8+3tHV+MPAe5kN4KMzN3ORONO4/+kN2doFyug2Iz9CTd+UAXktt9AaDvkDD0LotIFhiSB/QpmTU6iOx1KDtJtms3qo9jly+GFNIDunTV+qsWmEBXNZFg5lHcvjuDr9w5Mg+LEcaW05e7B8Y+P3vh8avTc0mkzNjg81H9h9oPH1NS1rQgv7sM/RbJnmFicmL10fs12hdb7evtxIgkzaXIJmKwVJmd1QUmbJ8cjk+y1TiYBzFRhJ4xEV8Cm0i6URRt8Nepj09KyksgNtSoA3msK+zkqTD4svhmxo4dvjwsWNHjjQ2t3SdfOcdxDf08bVPk3dvjQ+2NjbsPdh82pEtZj/7DG1HrMsvvyA+XlBIi/FEIi6sIyeTtqhUgidm7ongAzLJgAgfoPFmISMnQEIiIFpZkeUDbjPRKy+jSxWhiDgefE8YJEWGmRIVJRGX1uEDllz/cuvkvz9/8PDhQ4cOHf9168mTFy8NDo3/7dOZsaFXGvft/eXeI13DaXer1a8JqPrJ8zPnaxDJZJDCVOKccJJQgucCHBjDRKUCmpafYT4BPxAjpV0g95CsTFrAJxQV4HibWpepxAbrONatDaZZGKCwHVgDOXxjJw8dOnjo8IEDiK/5xRcv9g+N3RwbHug6sq9h93PPNb5y4276VJR1Qn44OquOEIvIl0tDkpcY0nV5gsrwEb3qy9PxOstHVJapE0YK034nwwdoPG9zOhcH5Wk+4NMGS0WqJfmOI74DSA7/uvnkyf7BofcvtRx5FsnuX+5rfn9qwdQTpa0f31XdWnTPwyd3Y3pruipN0GRJID7gxOozZwbP8MWxOrLuSsRlkcEBcvhiWH3Z4lLjK0YPRCHqK4qkD5DnYM2Zme7Waw0HDmP7PHwUKbC1taXpSMPaPXue3f1sA7LNu5/DWaAmEyQxS94Z6mq5CbUHrDPnadBqWrKn3yJl+aRSfCATzlJ8SE9RYp6MklBiMUVRJssJTC6fj5yacWhZPhF7sgJ7OtEAzH18yeG1q/c0NDz3XIMmq3/xxK5de/bs2t3Q3PQanJ2Zmp2ZufvpLE5kPn2/9YWXkUK9xD2aFhesKR27iX/IpG5ZvgDGMPRm+dL5iwc/L72lOC3kz5IcPujE0y7MuP0MH/RrPYDMAcJXlNP6181da/re9x9F8jiRVauR7Nr17Jofnx4eDt68dvuT27dv3ZmdQwHwfwebDzcPJ1Ma0hntS/IBFo9tCqStLctH8s2cfkuGjzPr7hOi5zSfxpNVS4YPkB5V1pMvxTcz8OQjjzzy2GMpwlU/+MGq1bufOzF4beqT8bFxlKhdu3lram4Wxgaaj/7qIu4tSaRvoC9ZMv3U/KUp09QDGb7F/ZYMH2tagq8ol08rdLP3zPA5iCd3L8OnQuH0976PBPOtQv9+8Pjatc2XPv7T2BASlKiNj1+7OTUzNfZK48GjzeNo1HlAqqMFYSYrioPwZYbI6k/rl7H3rz/SiNGbLQukAmTzT1CypP4mVdCrX6g/+n4+FQ6sefT7jzyqCWLc09A4ODY8+N7Ae78f+uMfMd+1wO3hk0cPHGwcnCJhUHvgBvtSlUuc6M/gv98+Nf3R9/NphS4tLhDsK9P1n8aXfZ6Z+ADsZDFk6u4l+VTmR2uQ9h55BFnnE0+s+nFTf1PrxYsX3+lHmShKRT8e/+R26enGA88fPHb69iyESXUexWMSAwJLZKCaPeozZqjFP8xHePTdi/hGcL5AHM/99ypL1e+afZqzGKWp/EXjya5pLf4t5ouPN61BS/DRxx97bE1D8yvv9ne1tr548p1LAxrg2Nhw64l9+/cff/lqUvvMB/ZqWXLFEu0kwJE0uCcTH5xpPhJW9MWZVav1B91QFYsWHriPDyX0RMPpxwmKib1GUCJPJtIdSx9w3hcfyIzH169BBvrYk02n+z94peXYf/zmN60nXzx5CSXb7w0NvftK4969+/cfbPFnHr2WgepMjiVKJC8x3kx8lyvSfJrbNaWtTHvWuD+omVvWS6Ql03+BZOnqStOPM0AClDWEsk9tsLTnSazX38+HMubZ8dNNJ5pOXxr+w381Nx49fPz4b5pRLoosdGBw8FIzCo579x0+1jWTybMBo7k8U6+Qa6KkfxYmCW96nQG+MM0nlxGll2t6ggFynpGHKU3qS7OfJqhiBGdlJWQVoPPD5CYmWjOKcInm31AmNGnVBksVOFrmsYiPyNS4X/j0L+Mvv3AY5WoI8NcY8FJ//8mmH+5GeejeI82DQznf9GhpLZpeCZd+qFBkS7qR1pRebXQ+QfA0TeP8E2otU5MTXwH82iSNeKHKxN4MZelunOIuK0VUCa2/i9MwokldoTOiJCReqyEJX9yuHSCvjROpSnBB/pn6PZ+EcO5PFxtRHXHw4EFcTDS3vtjacqJh9epnEd++lvenFnxbIJSnqkxzsZ3zBvwjTHeRWU9qCi091RdWcG62u1CX4VPDKasuZdxcrzaVVDzs0xyytYf3h4IuqrRQbwrm9ueBK2Uv1pLSokJ9gTHtT2FAyw0KK1gXW5F6YbAUH1bA3FDL4QPPP4/4Dv7q+PHGxhMNe55AdEh/+1qG76oLnCWMVhi1qesM5kJLYaGJFOAOBevWkNpvRjsNBITUf0BTIKpSzWZ0wJKNh4rdkLmVxYxnj4NP6v0KKYMqUo+zgCwwUg6TeJGyFp3BlB1sQf2X/VAOJodajh06hLPtA0caGp7dtfoJnKrt2bP2RP9YHKoLX9lCkS5c9PYIO0E8mVBR9oChnCYhingAqdyQcyqDdZvy7VKPceGdcJ4a096PkTI2UpK5Z4GFJ/UwwUAHCrL3LCf5S6F3ab7ZG5eO7d+Hcu3duxDbEygYIrxdaxuaf8TNLhHpFN96kz4HsUBvKiF1JvAXpTgKDOWCi5TpWqgUytKAhpKgj4S9lB+SaIs+504Wp4jf3xI+rQ0RXqd1l/TGEk+cMWbMEASK06o1loe9pATL7b/kqiQ5Ndj05BqUxOBEZhVOtdeu/XETd1NUlmwlAdnXW2w2GogYTUXdHkmrXUGkuxDvMxUxEgxYzcjqUp1u0WnB5xutDhFGSvGBdGxOBHstptSdrI4wdrJyWSE6o1h7fwtlV7nFbLaWcRKAGp92AIR70oOJIIoGM1tz+y8Lpzw11t/05JOrHkPy+Kq1axtOtAyMzczN5e0Ux+UgT/X29jrovuBkzqsWJcz29tBeCXt5SRDFzIuXuMDbe5x9+N01OSBmojqMix66t7vXwQUlrRsJZZyoSZnkRJEEQcKDQLJc0/1JPJi9hxrBn+wBPJaY09FfxKdCcHv4tdZ/+VETiodNpwfGp0C+T0EyF6Rk0TNYYlf2QLqlKZMNGEtkDiXyXbbgFjhc6Cty3lzl/Y5kMR+S5N07PcM3xj766Madu7MP+ODs4SSqBc9EX/Srvach/XMTvZJTl+Aj8rV+vaiEln5T4XGSLE6ivtp7qHgPCQ8r+lw2H98KJTEJgaIqaJEABcRFEUCU7csJtHSiURGtFxktSlmJOt1RVMUJCBMqkYgCxGA4oSphhpWVkKBGqAgQBUGGUpA8iHgkIIMo2lQUlPFJAl6rOQ8owZJeaNmKPnfOwzeP7DmuEInjJZHPTMOsEnYDD8vGhD4QYBlpklcivAzDDE15/DTlZaOyK+C1M7Qff/nTp4joh+BjGUqQOMbOT3IsGwzQERfjZCPoeifKZyWeZgQ/zfCKi2FpN88EVOhbTwc1RCA4tPbWSJ4prYAPJBR5chI9UiKTk5Ny9tuVhSI4RYYWGLdT4KlJro+KIJPjuQRgeK8zyPeOhByCQHtYKjRCCTQfpEIMExYDtCfoiHJMhPZ67CMM62W9lI9hgrQ7ZBfUhJv2CyLl9lFBmglSVIjjAegxmCzFFXaaoSq0Hryhd2WvPZfmU2TsmqORUDAciaItDLjk5QrlctAcJ9EuJ8WzIuuinS42jIpaf5QSeF6JOmJROshxMcHuoQSF4h2iCnkuFnWGqEic9jNOjvW4eUTPs15GFhySKjFuAIMOGT0XOqDQfQrHwzjOiPQGo9Fk1BIEfdkKv/pZhk9AeIFgJCJgvsTSHiBBO/pYux+wdp63jwDezvXZ+TgAPKKWWB/0O5UgLbJuxe/w01LE6XLEQIJzJXxUyCFKNP7PBJLMu0QnRYddXMLnlIFAeQBA14WoETqqOAMy61bDizpshvLICj3ScvoTQgF/mk9Z2j4B55D6UJLicog+SlT9jmjIKYR8MZYNKyLthxiLkZk+v3MkQrkZJurkQ2Ge9lOM4OR9zhCy6FCI9QYpjwiQkdK0OCJyTDAYcvg51k8LskMQaa/qtxqzmaDeYGXElTrcZfUXCQaD2D4n5bx8QU8iGIAw7ElEvFAV3IroBj5OpJ28ILrwt+Rsn1emHfRIPOFBUCBAoawGORV/IshQrKRwNBv1RfwOxqfIPFqKIisKDMVLfRQTDbllmVckVxR/WNldbDGbsFhK6OjKPznI618QXzQSCYWx+vLbp4r8Ds4c0D/8QTMkvwBylTxDkS8mcWIhUIE4PkdBN0G3BmSnChPkbwWgCMOznMNDshAIIDkAFAVqN4Ukn0HeXAr5RtzeoJTnUX8FPjQBRUFuU8L5H/ae+dxnPnHRfjeT6c0EH/Qt8iTj8tP3fb91v0CY95uJfPKQ8T2PKD6uL9tNEbwP+sQq0sf5vpn/0PLN8H135J98/9jyT75/bPn/zvd/oEDzwSo8mcUAAAAASUVORK5CYIIA"
    />
    <h1>COTIZACION</h1>
    <p style="text-align: center; margin: 0">RTN:08019995301582</p>
    <p style="text-align: center; margin: 0">
      Tegucigalpa, Boulevar Los Proceres, Col. Lara, edificio Paseo Alto
    </p>
    <p style="text-align: center; margin: 0">
      Email: ventas@cadelga.hn/ asesoria@cadelga.hn/ gerencia@cadelga.hn/
    </p>
    <p style="text-align: center; margin: 0">
      Atencion al cliente: +504 25522220/ +504 25503636
    </p>
    <div
      style="
        border-width: 2px;
        border-color: #000000;
        width: 400px;
        display: flex;
        border-style: solid;
        flex-direction: column;
        gap: 5px;
      "
    >
      <div
        style="display: flex; flex-direction: column; gap: 5px; padding: 10px"
      >
        <p style="margin: 0">Fecha Cotizacion : ${moment().format(
          'DD/MM/YYYY',
        )}</p>
        <p style="margin: 0">Fecha Vencimiento : ${moment()
          .add(6, 'days')
          .format('DD/MM/YYYY')}</p>
        <p style="margin: 0">No. :</p>
        <p style="margin: 0">Cliente:</p>
        <p style="margin: 0">Código:</p>
        <p style="margin: 0">RTN:</p>
        <p style="margin: 0">Dirección:</p>
        <p style="margin: 0">Teléfono:</p>
        <p style="margin: 0">Condiciones: 720 días</p>
        <p style="margin: 0">Moneda: LPS</p>
        <p style="margin: 0">Vendedor: Cadelga APP</p>
        <p style="margin: 0">Tasa de Cambio:</p>
        <p style="margin: 0">Origen: Cadelga APP</p>
        <p style="margin: 0">Destino:</p>
      </div>
    </div>
    <div style="width: 400px">
      <table style="border-collapse: collapse; width: 100%">
        <tr>
          <th style="border: 1px solid black; padding: 8px">Descripcion</th>
          <th style="border: 1px solid black; padding: 8px">Cantidad</th>
          <th style="border: 1px solid black; padding: 8px">Precio</th>
          <th style="border: 1px solid black; padding: 8px">Total Linea</th>
        </tr>
        ${dataText}
      </table>
    </div>
    <div
      style="
        border-width: 2px;
        border-color: #000000;
        width: 400px;
        display: flex;
        border-style: solid;
        flex-direction: column;
        gap: 5px;
      "
    >
      <div
        style="display: flex; flex-direction: column; gap: 5px; padding: 10px"
      >
        <div style="display: flex; justify-content: space-between">
          <p style="margin: 0">SubTotal :</p>
          <p style="margin: 0"> ${total}</p>
        </div>
        <div style="display: flex; justify-content: space-between">
          <p style="margin: 0">Descuentos y Rebajas:</p>
          <p style="margin: 0">0</p>
          </div>
        <div style="display: flex; justify-content: space-between">
          <p style="margin: 0">I.S.V 15% :</p>
          <p style="margin: 0">0</p>
          </div>
        <div style="display: flex; justify-content: space-between">
          <p style="margin: 0">Total LPS</p>
          <p style="margin: 0"> ${total}</p>
          </div>
      </div>
    </div>
  </div>
</div>

`;
  return htmlTemplate;
};

export default CotizadorUtil;
