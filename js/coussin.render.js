;(function(global) {
    global.coussin = global.coussin || {};
    global.coussin.render = function(name, content, container) {
        var graph;
        switch (name.split('.').pop().toLowerCase()) {

            case 'gexf':
                try {
                    sigma.parsers.gexf(
                        (new DOMParser()).parseFromString(content, 'application/xml'),
                        function(gexf) {
                            graph = {
                                nodes: gexf.nodes,
                                edges: gexf.edges
                            };
                        }
                    );
                } catch (err) {
                    console.log('NOPE');
                }
                break;
            case 'json':
            default:
                try {
                    graph = JSON.parse(content);
                } catch (err) {
                    console.log('NOPE');
                }
                break;
        }

        if (graph)
            new sigma({
                graph: graph,
                container: container
            });
        else
            console.log('NOPE');
    };
})(this);
