

import { Component } from "@angular/core";


@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})


export class MainComponent {


  subs_coloring(): void {
    <string>(
      String("use strict")
    );
    try {
      var sub00: any = document.querySelectorAll(
        <string>(
          String(".sub00")
        )
      );
      var sub01: any = document.querySelectorAll(
        <string>(
          String(".sub01")
        )
      );
      var sub02: any = document.querySelectorAll(
        <string>(
          String(".sub02")
        )
      );
      var sub10: any = document.querySelectorAll(
        <string>(
          String(".sub10")
        )
      );
      var sub11: any = document.querySelectorAll(
        <string>(
          String(".sub11")
        )
      );
      var sub12: any = document.querySelectorAll(
        <string>(
          String(".sub12")
        )
      );
      var sub20: any = document.querySelectorAll(
        <string>(
          String(".sub20")
        )
      );
      var sub21: any = document.querySelectorAll(
        <string>(
          String(".sub21")
        )
      );
      var sub22: any = document.querySelectorAll(
        <string>(
          String(".sub22")
        )
      );
      [...sub00, ...sub11, ...sub22].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(244, 0, 0)")
        );
      });
      [...sub01, ...sub12, ...sub20].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(0, 244, 0)")
        );
      });
      [...sub02, ...sub10, ...sub21].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(61, 61, 244)")
        );
      });
    } catch (err_1) {
      if (err_1) {
        console.clear();
        console.log(err_1);
      };
    };
  };


  rows_coloring(): void {
    <string>(
      String("use strict")
    );
    try {
      var y0: any = document.querySelectorAll(
        <string>(
          String(".y0")
        )
      );
      var y1: any = document.querySelectorAll(
        <string>(
          String(".y1")
        )
      );
      var y2: any = document.querySelectorAll(
        <string>(
          String(".y2")
        )
      );
      var y3: any = document.querySelectorAll(
        <string>(
          String(".y3")
        )
      );
      var y4: any = document.querySelectorAll(
        <string>(
          String(".y4")
        )
      );
      var y5: any = document.querySelectorAll(
        <string>(
          String(".y5")
        )
      );
      var y6: any = document.querySelectorAll(
        <string>(
          String(".y6")
        )
      );
      var y7: any = document.querySelectorAll(
        <string>(
          String(".y7")
        )
      );
      var y8: any = document.querySelectorAll(
        <string>(
          String(".y8")
        )
      );
      [...y0, ...y3, ...y6].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(244, 0, 0)")
        );
      });
      [...y1, ...y4, ...y7].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(0, 244, 0)")
        );
      });
      [...y2, ...y5, ...y8].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(61, 61, 244)")
        );
      });
    } catch (err_2) {
      if (err_2) {
        console.clear();
        console.log(err_2);
      };
    };
  };


  cols_coloring(): void {
    <string>(
      String("use strict")
    );
    try {
      var x0: any = document.querySelectorAll(
        <string>(
          String(".x0")
        )
      );
      var x1: any = document.querySelectorAll(
        <string>(
          String(".x1")
        )
      );
      var x2: any = document.querySelectorAll(
        <string>(
          String(".x2")
        )
      );
      var x3: any = document.querySelectorAll(
        <string>(
          String(".x3")
        )
      );
      var x4: any = document.querySelectorAll(
        <string>(
          String(".x4")
        )
      );
      var x5: any = document.querySelectorAll(
        <string>(
          String(".x5")
        )
      );
      var x6: any = document.querySelectorAll(
        <string>(
          String(".x6")
        )
      );
      var x7: any = document.querySelectorAll(
        <string>(
          String(".x7")
        )
      );
      var x8: any = document.querySelectorAll(
        <string>(
          String(".x8")
        )
      );
      [...x0, ...x3, ...x6].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(244, 0, 0)")
        );
      });
      [...x1, ...x4, ...x7].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(0, 244, 0)")
        );
      });
      [...x2, ...x5, ...x8].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(61, 61, 244)")
        );
      });
    } catch (err_3) {
      if (err_3) {
        console.clear();
        console.log(err_3);
      };
    };
  };


  null_coloring(): void {
    <string>(
      String("use strict")
    );
    try {
      var _cells_: any = document.querySelectorAll(
        <string>(
          String("td")
        )
      );
      [..._cells_].forEach((cell) => {
        cell.style.borderColor = <string>(
          String("rgb(122, 122, 122)")
        );
      });
    } catch (err_4) {
      if (err_4) {
        console.clear();
        console.log(err_4);
      };
    };
  };


  input_fT_tF_output(): void {
    <string>(
      String("use strict")
    );
    try {
      var r0_: number[] = [];
      var r1_: number[] = [];
      var r2_: number[] = [];
      var _clls_: any = document.querySelectorAll(
        <string>(
          String("td")
        )
      );
      while (
        <number>(
          Number(r0_.length)
        )
        <
        <number>(
          Number(9)
        )
      ) {
        var new_val: number = <number>(
          Number(Math.floor(Math.random() * <number>(
            Number(9)
          ))
            + <number>(
              Number(1)
            )
          ));
        if (
          <boolean>(
            Boolean(r0_.includes(<number>(
              Number(new_val)
            ))
            ))
          ===
          <boolean>(
            Boolean(false)
          )
        ) {
          r0_.push(<number>(
            Number(new_val)
          ));
        };
      };
      for (
        let indx_iterator: number = <number>(
          Number(6)
        );
        indx_iterator <= <number>(
          Number(8)
        );
        indx_iterator += <number>(
          Number(1)
        )
      ) {
        r1_.push(<number>(
          Number(r0_[<number>(
            Number(indx_iterator)
          )])
        ));
      };
      for (
        let indx_iterator: number = <number>(
          Number(0)
        );
        indx_iterator <= <number>(
          Number(5)
        );
        indx_iterator += <number>(
          Number(1)
        )
      ) {
        r1_.push(<number>(
          Number(r0_[<number>(
            Number(indx_iterator)
          )])
        ));
      };
      for (
        let indx_iterator: number = <number>(
          Number(6)
        );
        indx_iterator <= <number>(
          Number(8)
        );
        indx_iterator += <number>(
          Number(1)
        )
      ) {
        r2_.push(<number>(
          Number(r1_[<number>(
            Number(indx_iterator)
          )])
        ));
      };
      for (
        let indx_iterator: number = <number>(
          Number(0)
        );
        indx_iterator <= <number>(
          Number(5)
        );
        indx_iterator += <number>(
          Number(1)
        )
      ) {
        r2_.push(<number>(
          Number(r1_[<number>(
            Number(indx_iterator)
          )])
        ));
      };
      for (
        let _iterations: number = <number>(
          Number(0)
        );
        _iterations <= <number>(
          Number(8)
        );
        _iterations += <number>(
          Number(1)
        )
      ) {
        _clls_[<number>(
          Number(_iterations)
        )].innerHTML = <string>(
          String(r0_[<number>(
            Number(_iterations)
          )]
          ));
        _clls_[
          <number>(
            Number(_iterations)
          ) + <number>(
            Number(9)
          )
        ].innerHTML = <string>(
          String(r1_[<number>(
            Number(_iterations)
          )])
        );
        _clls_[
          <number>(
            Number(_iterations))
          + <number>(
            Number(18)
          )
        ].innerHTML = <string>(
          String(r2_[<number>(
            Number(_iterations)
          )])
        );
      };
      [..._clls_].forEach((_c_) => {
        _c_.style.color = <string>(
          String("rgb(244, 244, 244)")
        );
      });
      for (
        let __indx_iter: number = <number>(
          Number(27)
        );
        __indx_iter <= <number>(
          Number(80)
        );
        __indx_iter += <number>(
          Number(1)
        )
      ) {
        _clls_[<number>(
          Number(__indx_iter)
        )].style.color = <string>(
          String("rgb(244, 244, 244)")
        );
        _clls_[<number>(
          Number(__indx_iter)
        )].innerHTML = <string>(
          String('0')
        );
      };
      for (
        let repe_: number = <number>(
          Number(1)
        );
        repe_ <= <number>(
          Number(10)
        );
        repe_ += <number>(
          Number(1)
        )
      ) {
        this.___fT_tF___();
      };
      if (
        <string>(
          String(_clls_[<number>(
            Number(80)
          )].innerHTML))
        ===
        <string>(
          String('0')
        )
      ) {
        this.input_fT_tF_output();
      } else {
        var __tds__: any = document.querySelectorAll(
          <string>(
            String("td")
          )
        );
        var pseudo_random_indexes: number[] = [];
        for (
          let i_ter_: number = <number>(
            Number(0)
          );
          i_ter_ <= <number>(
            Number(80)
          );
          i_ter_ += <number>(
            Number(1)
          )
        ) {
          __tds__[<number>(
            Number(i_ter_)
          )].style.color = <string>(
            String("rgb(244, 244, 244)")
          );
        };
        while (
          <number>(
            Number(pseudo_random_indexes.length)
          )
          <
          <number>(
            Number(41)
          )
        ) {
          var new_int__: number = <number>(
            Number(
              Math.floor(Math.random() * <number>(
                Number(81)
              ))
            ));
          if (
            <boolean>(
              Boolean(pseudo_random_indexes.includes(
                <number>(
                  Number(new_int__)
                )
              )))
            ===
            <boolean>(
              Boolean(false)
            )
          ) {
            pseudo_random_indexes.push(<number>(
              Number(new_int__)
            ));
          };
        };
        for (
          let an_indx_iter: number = <number>(
            Number(0)
          );
          an_indx_iter <= <number>(
            Number(
              <number>(
                Number(pseudo_random_indexes.length))
              -
              <number>(
                Number(1)
              )
            ));
          an_indx_iter += <number>(
            Number(1)
          )
        ) {
          __tds__[<number>
            (Number(
              pseudo_random_indexes[<number>
              (Number(an_indx_iter)
              )]
            ))].style.color = <string>(
              String("rgb(0, 0, 0)")
            );
        };
        var generate_bttn: any = document.querySelector(
          <string>(
            String("#generate-bttn")
          )
        );
        var solve_bttn: any = document.querySelector(
          <string>(
            String("#solve-bttn")
          )
        );
        generate_bttn.style.visibility = <string>(
          String("hidden")
        );
        solve_bttn.style.visibility = <string>(
          String("visible")
        );
      };
    } catch (err_5) {
      if (err_5) {
        console.clear();
        console.log(err_5);
      };
    };
  };

  ___fT_tF___(): void {
    <string>(
      String("use strict")
    );
    try {
      {
        var ___cells: any = document.querySelectorAll(
          <string>(
            String("td")
          )
        );
        for (
          let anot_indx_iter: number = <number>(
            Number(27)
          );
          anot_indx_iter <= <number>(
            Number(80)
          );
          anot_indx_iter += <number>(
            Number(1)
          )
        ) {
          var its_sub: any = document.querySelectorAll(
            <string>(String(
              <string>(
                String('.')
              )
              +
              <string>(String(
                ___cells[
                  <number>(
                    Number(anot_indx_iter)
                  )
                ].getAttribute(<string>(
                  String("class")
                ))
              ).split(<string>(
                String(' ')
              ))[<number>(
                Number(0)
              )])
            ))
          );
          var its___y: any = document.querySelectorAll(
            <string>(
              String(
                <string>(
                  String('.')
                )
                +
                <string>(
                  String(
                    ___cells[
                      <number>(
                        Number(anot_indx_iter)
                      )
                    ].getAttribute(<string>(
                      String("class")
                    ))
                  ).split(<string>(
                    String(' ')
                  ))[<number>(
                    Number(1)
                  )])
              ))
          );
          var its___x: any = document.querySelectorAll(
            <string>(
              String(
                <string>(
                  String('.')
                )
                +
                <string>(
                  String(
                    ___cells[
                      <number>(
                        Number(anot_indx_iter)
                      )
                    ].getAttribute(<string>(
                      String("class")
                    ))
                  ).split(<string>(
                    String(' ')
                  ))[<number>(
                    Number(2)
                  )])
              ))
          );
          var sub_vals: number[] | string[] | any[] = [];
          var y___vals: number[] | string[] | any[] = [];
          var x___vals: number[] | string[] | any[] = [];
          for (
            let __ndx__iter_: number = <number>(
              Number(0)
            );
            __ndx__iter_ <= <number>(
              Number(8)
            );
            __ndx__iter_ += <number>(
              Number(1)
            )
          ) {
            sub_vals.push(<number>(
              Number(its_sub[
                <number>(
                  Number(__ndx__iter_)
                )
              ].innerHTML)));
            y___vals.push(<number>(
              Number(its___y[
                <number>(
                  Number(__ndx__iter_)
                )
              ].innerHTML)));
            x___vals.push(<number>(
              Number(its___x[
                <number>(
                  Number(__ndx__iter_)
                )
              ].innerHTML)));
          };
          for (
            let pos_new_val_ing: number = <number>(
              Number(1)
            );
            pos_new_val_ing <= <number>(
              Number(9)
            );
            pos_new_val_ing += <number>(
              Number(1)
            )
          ) {
            if (
              (
                <boolean>(
                  Boolean(sub_vals.includes(<number>(
                    Number(pos_new_val_ing)
                  ))))
                ===
                <boolean>(
                  Boolean(false)
                )
              )
              &&
              (
                <boolean>(
                  Boolean(y___vals.includes(<number>(
                    Number(pos_new_val_ing)
                  ))))
                ===
                <boolean>(
                  Boolean(false)
                )
              )
              &&
              (
                <boolean>(
                  Boolean(x___vals.includes(<number>(
                    Number(pos_new_val_ing)
                  ))))
                ===
                <boolean>(
                  Boolean(false)
                )
              )
            ) {
              ___cells[<number>(
                Number(anot_indx_iter)
              )].innerHTML = <string>(
                String(<number>(
                  Number(pos_new_val_ing)
                ))
              );
              ___cells[<number>(
                Number(anot_indx_iter)
              )].style.color = <string>(
                String("rgb(244, 0, 0)")
              );
              break;
            };
          };
          if (
            <string>(
              String(___cells[anot_indx_iter].innerHTML)
            )
            ===
            <string>(
              String('0')
            )
          ) {
            break;
          };
        };
      };
    } catch (err_6) {
      if (err_6) {
        console.clear();
        console.log(err_6);
      };
    };
  };

  rerender_UI_state(): void {
    <string>(
      String("use strict")
    );
    try {
      var generate_bttn: any = document.querySelector(
        <string>(
          String("#generate-bttn")
        )
      );
      var solve_bttn: any = document.querySelector(
        <string>(
          String("#solve-bttn")
        )
      );
      var __cubicles_: any = document.querySelectorAll(
        <string>(
          String("td")
        )
      );
      generate_bttn.style.visibility = <string>(
        String("visible")
      );
      solve_bttn.style.visibility = <string>(
        String("hidden")
      );
      [...__cubicles_].forEach((cubicle) => {
        cubicle.style.color = <string>(
          String("rgb(244, 244, 244)")
        );
      });
    } catch (err_7) {
      if (err_7) {
        console.clear();
        console.log(err_7);
      };
    };
  };


};
