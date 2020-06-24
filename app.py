from flask import Flask, json, request, jsonify, send_from_directory
import rdflib
import glob
app = Flask(__name__, static_url_path='/static')

@app.route('/list', methods=['GET'])
def get_files():
    files = glob.glob('static/ttl/*.ttl')
    files = [name.split('/')[-1] for name in files]
    return jsonify(list(files))

@app.route('/query', methods=['POST'])
def query():
    query_req = request.get_json(force=True)
    if 'file' not in query_req or 'query' not in query_req:
        return "Needs both 'file' and 'query' keys"
    files = list(glob.glob('static/ttl/*.ttl'))
    files = [name.split('/')[-1] for name in files]
    if query_req['file'] not in files:
        return f"File should be one of {files}"
    g = rdflib.Graph()
    g.parse('static/ttl/'+query_req['file'], format='ttl')
    res = g.query(query_req['query'])
    res = [{str(k): str(v) for k,v in d.items()} for d in res.bindings]
    return jsonify(res)

@app.route('/', methods=['GET'])
def index():
    return send_from_directory('static', 'index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port='8001', debug=True)
