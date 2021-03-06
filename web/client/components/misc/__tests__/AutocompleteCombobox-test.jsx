/*
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
import expect from 'expect';

import React from 'react';
import ReactDOM from 'react-dom';
import { AutocompleteCombobox } from '../AutocompleteCombobox';
import { createPagedUniqueAutompleteStream } from '../../../observables/autocomplete';

describe("This test for AutocompleteCombobox component", () => {
    beforeEach((done) => {
        document.body.innerHTML = '<div id="container"></div>';
        setTimeout(done);
    });
    afterEach((done) => {
        ReactDOM.unmountComponentAtNode(document.getElementById("container"));
        document.body.innerHTML = '';
        setTimeout(done);
    });
    it('creates AutocompleteCombobox with defaults', () => {
        const comp = ReactDOM.render(<AutocompleteCombobox autocompleteStreamFactory={createPagedUniqueAutompleteStream}/>, document.getElementById("container"));
        expect(comp).toExist();
    });

    it('creates AutocompleteCombobox with change', () => {
        const comp = ReactDOM.render(<AutocompleteCombobox value="old" autocompleteStreamFactory={createPagedUniqueAutompleteStream}/>, document.getElementById("container"));
        expect(comp).toExist();
        const input = document.getElementsByTagName("input")[0];
        input.value = "newValue";

    });

});
