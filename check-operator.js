const fetch = require('node-fetch');

async function cekOperator(phone) {
    try {
        const url = `https://savant-api.vercel.app/tools/operator?phone=${phone}`;
        const res = await fetch(url);
        const data = await res.json();

        if (!data.status) throw new Error('Gagal ambil data operator.');

        return {
            status: true,
            phone: data.result.phone,
            operator: data.result.operator
        };
    } catch (err) {
        return {
            status: false,
            error: err.message
        };
    }
}

// usage:
(async () => {
    const results = await cekOperator('628568705224');
    console.log(results);
})();
