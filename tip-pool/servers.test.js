describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not allow nothing to be typed in to server form on submitServerInfo()', function () {
    serverNameInput.value = '';
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should add a new server and earnings to server table on updateServerTable()', function () {
    submitServerInfo();
    let allTd = document.querySelectorAll('#serverTable tbody tr td');
    expect(allTd.length).toEqual(3);
    expect(allTd[0].innerText).toEqual('Alice');
    expect(allTd[1].innerText).toEqual('$0.00');
  });

  afterEach(function () {
    // teardown logic
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = '';
  });
});
