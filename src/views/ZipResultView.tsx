import React from 'react';
import { ZipResult } from '../models/CodeZipModel';

interface ZipResultViewProps {
  results: ZipResult[];
  recentZips: string[];
}

const ZipResultView: React.FC<ZipResultViewProps> = ({ results, recentZips }) => {
  return (
    <div>
      <h2>Ciudades </h2>
      <ul>
        {results.length > 0 ? (
          results.map((result, index) => (
            <li key={index}>{result.city}, {result.state}</li>
          ))
        ) : (
          <p>No se encontraron resultados.</p>
        )}
      </ul>

      <h2>Codigos Zip recientes</h2>
      <ul>
        {recentZips.length > 0 ? (
          recentZips.map((zip, index) => <li key={index}>{zip}</li>)
        ) : (
          <p>Sin codigos recientes.</p>
        )}
      </ul>
    </div>
  );
};

export default ZipResultView;
