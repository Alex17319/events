// Copyright (C) 2026 amorphea
//
// This file is part of Grevillea.
//
// Grevillea is free software: you can redistribute it and/or modify it under the
// terms of the GNU Affero General Public License as published by the Free
// Software Foundation, either version 3 of the License, or (at your option)
// any later version.
//
// Grevillea is distributed in the hope that it will be useful, but WITHOUT ANY
// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
// FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
// details.
//
// You should have received a copy of the GNU Affero General Public License
// along with Grevillea. If not, see <https://www.gnu.org/licenses/>.

class ValidationUtils {
  // Checks if a variable is a finite, correctly-typed number primitive or object
  // Rejecs NaN, [], true, false, null, undefined, {}, Infinity, "", etc
  // Accepts 1, 2, 3, 0.5, Math.PI, new Number(5), etc
  static isNumber(x) {
    if (typeof x === 'object') x = x?.valueOf();
    
    if (typeof x !== 'number') return false;
    
    return Number.isFinite(x);
  }
}