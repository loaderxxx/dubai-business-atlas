#!/usr/bin/env python3
import json
from pathlib import Path
from urllib.parse import urlparse
root = Path(__file__).resolve().parents[1]
data = json.loads((root / 'data/bay-square/companies.json').read_text())
records = data['records']
assert data['record_count'] == len(records)
assert len({r['id'] for r in records}) == len(records)
statuses = {'company_confirmed', 'operator_listed', 'conflicting', 'thirdparty_only', 'unknown'}
for r in records:
    assert r['location_status'] in statuses
    assert r['description_ru'] and r['sources']
    assert isinstance(r['services'], list) and isinstance(r['caveats'], list)
    assert r['building'] is None or isinstance(r['building'], int)
    assert (root / ('data/bay-square/profiles/' + r['id'] + '.md')).exists()
    for s in r['sources']:
        u = urlparse(s['url'])
        assert u.scheme == 'https' and u.netloc
        assert s['checked'] and s['supports']
    assert not {'phone', 'email', 'password', 'api_key', 'private_notes'} & r.keys()
print(f'PASS: {len(records)} unique records, profiles and provenance checked')
