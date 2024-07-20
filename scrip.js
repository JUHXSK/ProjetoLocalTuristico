document.addEventListener('DOMContentLoaded', function() {
    const palavras = {
        'História': 'historia',
        'Casais': 'casais',
        'Famílias': 'familias',
        'Orçamento': 'orcamento',
        'Meditação': 'meditacao' // Corrigido o erro de sintaxe
    };

    document.querySelectorAll('p, div').forEach(element => {
        let html = element.innerHTML;
        for (const [palavra, classe] of Object.entries(palavras)) {
            const regex = new RegExp(`(${palavra})`, 'g');
            html = html.replace(regex, `<span class="destino ${classe}">$1</span>`);
        }
        element.innerHTML = html;
    });
});
