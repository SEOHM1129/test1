document.addEventListener('DOMContentLoaded', () => {
    const dictionary = window.semiData.dictionary;
    const newsContent = document.querySelectorAll('.news-card p, .news-card h2');

    // Create Tooltip Element
    const tooltip = document.createElement('div');
    tooltip.className = 'fixed hidden z-[100] max-w-xs p-4 rounded-2xl bg-surface-container-highest border border-outline-variant/30 shadow-2xl backdrop-blur-xl text-sm pointer-events-none transition-opacity duration-200 opacity-0';
    tooltip.id = 'glossary-tooltip';
    document.body.appendChild(tooltip);

    function showTooltip(e, term) {
        const data = dictionary[term];
        if (!data) return;

        tooltip.innerHTML = `
            <div class="flex items-center gap-2 mb-2">
                <span class="text-secondary font-bold font-headline">${term}</span>
                <span class="px-1.5 py-0.5 rounded bg-primary/20 text-primary text-[10px] font-bold uppercase">${data.category}</span>
            </div>
            <p class="text-on-surface-variant text-xs leading-relaxed">${data.def}</p>
        `;
        
        tooltip.classList.remove('hidden');
        setTimeout(() => tooltip.classList.add('opacity-100'), 10);
        
        const rect = e.target.getBoundingClientRect();
        tooltip.style.left = `${rect.left}px`;
        tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
    }

    function hideTooltip() {
        tooltip.classList.remove('opacity-100');
        setTimeout(() => tooltip.classList.add('hidden'), 200);
    }

    // Highlight terms in news content
    newsContent.forEach(container => {
        let html = container.innerHTML;
        const sortedTerms = Object.keys(dictionary).sort((a, b) => b.length - a.length);
        
        sortedTerms.forEach(term => {
            // Match the term but only if not followed by a closing span tag or part of an existing glossary-term
            const regex = new RegExp(`(?![^<]*>)${term}`, 'g');
            html = html.replace(regex, (match, offset, fullText) => {
                // Check if already wrapped (simple check for previous turns)
                const preMatch = fullText.slice(Math.max(0, offset - 40), offset);
                if (preMatch.includes('data-term=')) return match;
                return `<span class="glossary-term text-secondary border-b border-secondary/30 cursor-help" data-term="${term}">${term}</span>`;
            });
        });
        container.innerHTML = html;
    });

    // Add event listeners
    document.querySelectorAll('.glossary-term').forEach(el => {
        el.addEventListener('mouseenter', (e) => showTooltip(e, el.dataset.term));
        el.addEventListener('mouseleave', hideTooltip);
    });
});

// Add styles for glossary terms
const style = document.createElement('style');
style.textContent = `
    .glossary-term {
        transition: all 0.2s;
    }
    .glossary-term:hover {
        background-color: rgba(190, 245, 0, 0.1);
        border-bottom-color: rgba(190, 245, 0, 1);
    }
`;
document.head.appendChild(style);
