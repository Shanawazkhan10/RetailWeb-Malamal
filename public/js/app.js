$(function () {
  //If check_all checked then check all table rows
  $("#check_all").on("click", function () {
    if ($("input:checkbox").prop("checked")) {
      $("input:checkbox[name='row-check']").prop("checked", true);
    } else {
      $("input:checkbox[name='row-check']").prop("checked", false);
    }
  });

  // Check each table row checkbox
  $("input:checkbox[name='row-check']").on("change", function () {
    var total_check_boxes = $("input:checkbox[name='row-check']").length;
    var total_checked_boxes = $(
      "input:checkbox[name='row-check']:checked"
    ).length;

    // If all checked manually then check check_all checkbox
    if (total_check_boxes === total_checked_boxes) {
      $("#check_all").prop("checked", true);
    } else {
      $("#check_all").prop("checked", false);
    }
  });

  function sortTableByColumn(table, column, asc = true) {
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));

    // Sort each row
    const sortedRows = rows.sort((a, b) => {
      const aColText = a
        .querySelector(`td:nth-child(${column + 1})`)
        .textContent.trim();
      const bColText = b
        .querySelector(`td:nth-child(${column + 1})`)
        .textContent.trim();

      return aColText > bColText ? 1 * dirModifier : -1 * dirModifier;
    });

    // Remove all existing TRs from the table
    while (tBody.firstChild) {
      tBody.removeChild(tBody.firstChild);
    }

    // Re-add the newly sorted rows
    tBody.append(...sortedRows);

    // Remember how the column is currently sorted
    table
      .querySelectorAll("th")
      .forEach((th) => th.classList.remove("th-sort-asc", "th-sort-desc"));
    table
      .querySelector(`th:nth-child(${column + 1})`)
      .classList.toggle("th-sort-asc", asc);
    table
      .querySelector(`th:nth-child(${column + 1})`)
      .classList.toggle("th-sort-desc", !asc);
  }

  document.querySelectorAll(".table-sortable th").forEach((headerCell) => {
    headerCell.addEventListener("click", () => {
      const tableElement = headerCell.parentElement.parentElement.parentElement;
      const headerIndex = Array.prototype.indexOf.call(
        headerCell.parentElement.children,
        headerCell
      );
      const currentIsAscending = headerCell.classList.contains("th-sort-asc");

      sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
    });
  });
});
