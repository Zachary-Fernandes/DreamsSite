import http.server
import json


PORT = 9001

try:
    print ('Started httpserver on port' , PORT)
    server = http.server.HTTPServer(('', PORT), http.server.SimpleHTTPRequestHandler)
    server.serve_forever()

except KeyboardInterrupt:
    print ('^C received, shutting down the web server')
    server.socket.close()
